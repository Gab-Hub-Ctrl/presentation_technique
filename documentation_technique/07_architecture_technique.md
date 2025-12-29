Architecture technique globale

Ce document détaille l'architecture technique globale du projet IT Dashboard A+, en présentant la vue d'ensemble, les composants principaux, la portabilité maximale, et l'automatisation complète. Cette section est essentielle car elle explique les choix techniques, la structure en couches, et les composants principaux du système. L'objectif est de présenter une vue d'ensemble cohérente de l'architecture, en montrant comment les différents composants s'articulent pour créer un système fonctionnel et maintenable. Pour comprendre le contexte de réalisation, voir `01_introduction.md`. Pour explorer les fonctionnalités opérationnelles, voir `04_fonctionnalites_operationnelles.md`.

Vue d'ensemble

J'ai conçu le projet IT Dashboard A+ avec une architecture en couches, pensée pour être lisible, évolutive et maintenable. Mon objectif n'est pas encore la performance ou la scalabilité, mais la cohérence, la lisibilité et la gouvernance du flux de données.

Le projet comprend plusieurs composants principaux. Le Frontend en React et TypeScript permet la visualisation des alertes, les corrélations globales, les vues par pôle et la gestion des feedbacks utilisateurs. Le Backend en Python implémente un pipeline complet de collecte, ETL, Rules Engine et Correlation Engine. L'intégration Vault est opérationnelle. Le stockage et les logs utilisent le format JSONL, des logs au format Markdown horodatés, des archives en rotation automatique et une politique de rétention. Vault gère de manière sécurisée les secrets via AppRoles, incluant la génération automatique, la rotation et la consommation par les collecteurs.

Composants principaux opérationnels

J'ai développé 10 collecteurs pour les pôles 1 à 10. Leur rôle est de collecter des événements par domaine IT comme la sécurité, le cloud, le développement et les systèmes. J'ai implémenté 10 scripts Python collect_pole qui chargent automatiquement les credentials Vault, génèrent des événements bruts au format JSON, utilisent un logging standardisé avec filtrage des données sensibles, et propagent systématiquement des Correlation IDs.

Le pipeline ETL normalise, enrichit et fiabilise les données collectées. Il normalise les schémas JSON, déduplique par hash SHA256, enrichit les données de métadonnées, archive automatiquement les données J-1 en compression, et applique une rétention configurable de 90 jours par défaut.

Le Rules Engine transforme des événements normalisés en alertes exploitables. Il applique un scoring de sévérité basé sur des règles explicites avec des seuils clairs : critique à partir de 0,7, moyen entre 0,4 et 0,69, faible en dessous de 0,4.

Le Correlation Engine pour le pôle 11 corrèle les alertes issues des pôles 1 à 10 et calcule un score de risque global. Les politiques de corrélation incluent Global Critical, Time Window Correlation et Multi-Pole Cross Correlation.

Portabilité maximale : ProjectModule

Mon objectif était de permettre l'exécution de n'importe quel script depuis n'importe quel répertoire. J'ai implémenté cela dans Tools/utils/core/ProjectModule.psm1. Le module détecte automatiquement la racine du projet avec 5 stratégies de fallback, expose une table centralisée $Global:ProjectPaths, supprime les chemins absolus hardcodés et valide la racine par critères.

Automatisation complète : Menus CLI

Plusieurs menus CLI interactifs automatisent toutes les opérations. Le Menu Principal sert de point d'entrée centralisé avec accès à tous les sous-menus. Le Menu Vault permet l'initialisation complète, la création de policies et d'AppRoles pour 10 pôles, la rotation des Secret IDs, et un cycle complet automatique en 15 étapes. Pour plus de détails sur l'intégration Vault, voir `04_fonctionnalites_operationnelles.md` (section Intégration Vault). Le Menu Stack Management permet de lancer la stack complète, le Backend uniquement, le Frontend uniquement, le pipeline complet, et l'arrêt de la stack. Le Menu Maintenance offre un backup complet, une restauration, un nettoyage standard et approfondi, un test de santé et un diagnostic avancé. Pour plus de détails sur l'observabilité, voir `08_observabilite_qualite.md`.

J'ai créé des scripts de maintenance spécifiques. Test-StackHealth.ps1 vérifie complètement la santé de la stack et génère des rapports de santé horodatés.
