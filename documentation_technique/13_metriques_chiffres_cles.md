Chiffres clés et métriques du projet

Volume de code

Le projet comprend environ 90 scripts PowerShell au total : environ 40 dans Projet_Dashboard_IT_IA, environ 40 dans le projet Vault, et environ 10 dans Bridgepoint. Trois modules PowerShell ont été créés : ProjectModule.psm1, VaultModule.psm1 et VaultCommon.psm1. Environ 45 fichiers Python incluent collecteurs, ETL, règles, corrélation, API, services, repositories et tests. Environ 60 composants React et TypeScript ont été créés : environ 40 composants tsx et environ 20 services et utilitaires ts. Onze prompts fondateurs en Markdown représentent 2 466 lignes. Environ 20 guides et documentations ont été produits : 8 guides d'architecture, 13 guides d'onboarding et des runbooks opérationnels. INIT_SEQUENCE comprend 29 fichiers, représentant 5 984 lignes de documentation et prompts structurés.

Structure modulaire

Dix collecteurs Python opérationnels ont été développés pour les pôles de collecte. Les modules backend incluent ETL, Rules Engine, Correlation Engine, API REST, Services et Repositories. Les vues frontend comprennent GlobalView, PoleView pour 10 pôles et FeedbackView. Les composants de visualisation incluent SeverityHeatmap, TimelineView, CorrelationsChart, StatCard et DashboardCard.

Couverture fonctionnelle

Tous les scripts PowerShell identifiés utilisent ProjectModule pour la portabilité. Tous les collecteurs identifiés chargent automatiquement les AppRoles pour l'intégration Vault. La synchronisation est automatique de Backend vers Frontend via script dédié. L'archivage suit une rotation automatique J-1 avec rétention de 90 jours. Sept phases de tests automatisés ont été mises en place : portabilité, uniformisation, menus CLI, AppRoles, documentation, logs et observabilité, et gouvernance.
