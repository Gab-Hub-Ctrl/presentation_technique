Résolution de problèmes : un fil conducteur structurant

Chaque problème que j'ai rencontré a été une opportunité d'apprentissage. Voici comment j'ai appris à résoudre des problèmes complexes en autonomie.

Problème 1 : Perte de contexte et saturation de la mémoire

Lorsque je travaillais avec des IA publiques, je devais copier-coller l'intégralité de mes fichiers existants dans chaque nouvelle conversation. Plus le projet grandissait, plus cette approche devenait impossible : envoyer toutes les données saturait la mémoire de contexte du modèle.

J'ai d'abord créé des bilans techniques et des arborescences pour faciliter la reprise, mais cela ne suffisait pas. J'ai alors conçu INIT_SEQUENCE_ITD-A+, un système de gouvernance IA structuré en machine à états finis.

Le système permet de reconstruire l'état logique du projet après une interruption, en passant par des états successifs : Bootloader, validation des bilans, analyse de l'arborescence, contrôle de cohérence, puis mode projet actif.

J'ai découvert les machines à états finis, les protocoles de gouvernance et l'importance de la traçabilité. Pour plus de détails sur INIT_SEQUENCE, voir la section INIT_SEQUENCE.

Problème 2 : Prompts trop longs et incohérences

Après plusieurs tentatives de prompts plus ou moins réussis, j'ai compris qu'envoyer un prompt trop long nuisait à la bonne compréhension par l'IA. De plus, les prompts générés automatiquement manquaient de cohérence entre eux.

J'ai fractionné les prompts en plusieurs sections avec des rôles bien définis. L'évolution a été itérative : 5 prompts, puis 8, puis 11 fichiers correspondant à 8 prompts logiques. À chaque ajout, j'ai dû rendre cohérents tous les prompts entre eux, construisant un véritable fil conducteur logique.

J'ai créé un ensemble de 11 prompts fondateurs cohérents, représentant 2 466 lignes Markdown, qui définissent le comportement attendu du modèle, les standards de code, la vision d'architecture, et les aspects audit, portabilité et maintenance.

J'ai appris l'importance de la cohérence dans la documentation, la structuration de l'information et le prompt engineering.

Problème 3 : Comportements inattendus et caractères Unicode

Arrivé à la génération de scripts, des comportements inattendus sont apparus. En analysant le problème, j'ai découvert que les prompts générés comportaient des caractères Unicode comme des emojis, et parfois l'IA n'arrivait pas à interpréter les règles correctement.

J'ai dû recommencer et revoir les procédures de cohérence, en nettoyant tous les caractères Unicode et en standardisant le format en ASCII uniquement. Cette contrainte garantit la compatibilité et évite les interprétations erronées.

J'ai intégré un système de validation strict dans le bootloader et la charte de réponse de INIT_SEQUENCE : ASCII uniquement, pas d'emojis, pas d'Unicode exotique.

J'ai appris l'importance de la normalisation des formats, de la validation des entrées et de la gestion des encodages.

Problème 4 : Portabilité et chemins absolus

Les scripts générés utilisaient des chemins absolus hardcodés ou des calculs manuels de chemins avec Split-Path et des concaténations avec des points, rendant le projet non portable et difficile à maintenir.

J'ai développé ProjectModule.psm1, un module PowerShell dédié jouant le rôle de mini framework interne de portabilité. Le module implémente 5 stratégies de détection de la racine du projet et expose une table centralisée $Global:ProjectPaths.

Tous les scripts peuvent maintenant être exécutés depuis n'importe quel répertoire, sans dépendance aux chemins absolus.

J'ai découvert les modules PowerShell, les patterns de détection de racine et l'importance de la portabilité. Pour plus de détails sur ProjectModule, voir la section Architecture technique.

Problème 5 : Intégration Vault et format des AppRoles

Les scripts Python cherchaient roleid et secretid en minuscules et sans underscore, alors que Vault génère role_id et secret_id avec underscore. Le pipeline ne pouvait pas s'initialiser correctement.

J'ai mis à jour tous les scripts de collecte, soit 10 scripts, et le template de génération Generate-PoleScripts.ps1 pour utiliser le format Vault standard. J'ai harmonisé complètement le système Vault et le Dashboard.

Le pipeline charge maintenant correctement les credentials Vault et s'initialise avec les AppRoles générés automatiquement. Tous les collecteurs fonctionnent de bout en bout.

J'ai découvert l'importance de la normalisation des formats de données entre systèmes, la gestion des credentials et l'intégration de systèmes externes.

Problème 6 : Gestion du cycle de vie des données

Au fur et à mesure que le projet grandissait, les données brutes et les logs s'accumulaient sans gestion automatique, risquant de saturer l'espace de stockage.

J'ai implémenté un système d'archivage et de rétention automatique. Les données J-1 sont compressées automatiquement au format ZIP. Les logs sont gérés selon une rotation : 0 à 30 jours actifs, 30 à 90 jours compressés, au-delà de 90 jours purge automatique. La politique de rétention est configurable, avec 90 jours par défaut.

J'ai créé un système de gestion automatique du cycle de vie des données, inspiré des pratiques de Vault, garantissant la traçabilité tout en optimisant l'espace de stockage.

J'ai découvert les politiques de rétention, la compression de données et l'importance de la gestion du cycle de vie.
