Résolution de problèmes : un fil conducteur structurant

Ce document présente comment j'ai résolu les problèmes rencontrés au cours du développement du projet IT Dashboard A+. Cette section est importante car elle illustre ma capacité à transformer des obstacles en opportunités d'apprentissage et d'innovation. L'objectif est de montrer comment chaque problème a été une opportunité de créer une solution structurée et réutilisable. Chaque solution créée est devenue la base pour la suivante, créant un système qui s'améliore continuellement. Quand je rencontre un problème, je cherche naturellement une solution adaptée. Cette approche simple m'a permis d'avancer rapidement sur le projet. Chaque problème que j'ai rencontré a été une opportunité d'apprentissage. Voici comment j'ai résolu des problèmes complexes en autonomie. Pour comprendre le contexte de réalisation, voir `01_introduction.md`. Pour explorer les solutions créées, voir `06_init_sequence.md` et `07_architecture_technique.md`.

Problème 1 : Perte de contexte et saturation de la mémoire

Quand je travaillais avec des IA publiques, je devais copier-coller l'intégralité de mes fichiers existants dans chaque nouvelle conversation. Plus le projet grandissait, plus cette approche devenait impossible : envoyer toutes les données saturait la mémoire de contexte du modèle.

Face à ce problème, j'ai simplement cherché une solution adaptée. J'ai d'abord créé des bilans techniques et des arborescences pour faciliter la reprise, mais cela ne suffisait pas. J'ai alors conçu INIT_SEQUENCE_ITD-A+, un système de gouvernance IA structuré en machine à états finis.

Le système permet de reconstruire l'état logique du projet après une interruption, en passant par des états successifs : Bootloader, validation des bilans, analyse de l'arborescence, contrôle de cohérence, puis mode projet actif.

Ça m'a fait découvrir les machines à états finis, les protocoles de gouvernance et l'importance de la traçabilité. Pour plus de détails sur INIT_SEQUENCE, voir `06_init_sequence.md` (section Architecture : machine à états finis).

Problème 2 : Prompts trop longs et incohérences

Quand j'ai essayé d'envoyer des prompts, j'ai compris qu'un prompt trop long nuisait à la bonne compréhension par l'IA. De plus, les prompts générés automatiquement manquaient de cohérence entre eux.

J'ai simplement découpé les prompts en plusieurs sections avec des rôles bien définis. L'évolution a été itérative : 5 prompts, puis 8, puis 11 fichiers correspondant à 8 prompts logiques. À chaque ajout, j'ai dû rendre cohérents tous les prompts entre eux, construisant un véritable fil conducteur logique.

J'ai créé un ensemble de 11 prompts fondateurs cohérents, représentant 1090 lignes Markdown, qui définissent le comportement attendu du modèle, les standards de code, la vision d'architecture, et les aspects audit, portabilité et maintenance.

Ça m'a appris l'importance de la cohérence dans la documentation, la structuration de l'information et le prompt engineering.

Problème 3 : Comportements inattendus et caractères Unicode

Quand j'ai commencé à générer des scripts, des comportements inattendus sont apparus. En regardant le problème, j'ai découvert que les prompts générés comportaient des caractères Unicode comme des emojis, et parfois l'IA n'arrivait pas à interpréter les règles correctement.

J'ai simplement nettoyé tous les caractères Unicode et standardisé le format en ASCII uniquement. Cette contrainte garantit la compatibilité et évite les interprétations erronées.

J'ai intégré un système de validation strict dans le bootloader et la charte de réponse de INIT_SEQUENCE : ASCII uniquement, pas d'emojis, pas d'Unicode exotique.

Ça m'a fait comprendre l'importance de la normalisation des formats, de la validation des entrées et de la gestion des encodages.

Problème 4 : Portabilité et chemins absolus

Quand j'ai généré les scripts, ils utilisaient des chemins absolus hardcodés, ce qui rendait le projet non portable. C'était un problème pratique : je ne pouvais pas déplacer le projet facilement.

J'ai créé ProjectModule.psm1, un module PowerShell qui détecte automatiquement la racine du projet. Le module implémente 5 stratégies de détection et expose une table centralisée $Global:ProjectPaths.

Maintenant, tous les scripts peuvent être exécutés depuis n'importe quel répertoire, sans dépendance aux chemins absolus.

Ça m'a fait découvrir les modules PowerShell, les patterns de détection de racine et l'importance de la portabilité dans un projet. Pour plus de détails sur ProjectModule, voir `07_architecture_technique.md` (section Portabilité maximale : ProjectModule).

Problème 5 : Intégration Vault et format des AppRoles

Quand j'ai essayé d'intégrer Vault, les scripts Python cherchaient roleid et secretid en minuscules et sans underscore, alors que Vault génère role_id et secret_id avec underscore. Le pipeline ne pouvait pas s'initialiser correctement.

J'ai harmonisé les formats sur tous les scripts de collecte, soit 10 scripts, et le template de génération Generate-PoleScripts.ps1 pour utiliser le format Vault standard.

Maintenant, le pipeline charge correctement les credentials Vault et s'initialise avec les AppRoles générés automatiquement. Tous les collecteurs fonctionnent de bout en bout.

Ça m'a fait comprendre l'importance de la normalisation des formats de données entre systèmes, la gestion des credentials et l'intégration de systèmes externes.

Problème 6 : Gestion du cycle de vie des données

Quand le projet a grandi, les données brutes et les logs s'accumulaient sans contrôle, risquant de saturer l'espace de stockage. C'était un problème pratique qui nécessitait une solution.

J'ai mis en place un système d'archivage automatique : compression des données du jour précédent, rétention de 90 jours, puis purge automatique. Les logs sont gérés selon une rotation : 0 à 30 jours actifs, 30 à 90 jours compressés, au-delà de 90 jours purge automatique. La politique de rétention est configurable, avec 90 jours par défaut.

Ça m'a fait réfléchir à la gestion du cycle de vie des données et à l'importance de l'optimisation de l'espace de stockage tout en garantissant la traçabilité.
