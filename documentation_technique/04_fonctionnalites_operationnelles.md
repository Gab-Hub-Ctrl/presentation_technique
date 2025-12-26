Ce qui fonctionne réellement : démonstration opérationnelle

Intégration Vault : automatisation complète du cycle de vie des secrets

J'ai intégré HashiCorp Vault de manière opérationnelle dans mon projet. L'automatisation couvre le cycle de vie complet des AppRoles. Le système génère automatiquement 10 fichiers AppRole JSON, un par pôle. Chaque collecteur Python charge automatiquement son fichier AppRole via la fonction loadroleandsecret(). Chaque étape du pipeline s'initialise avec les credentials Vault appropriés. Un cycle complet automatisé en 15 étapes configure tout de bout en bout, incluant la rotation automatique des logs et la génération de rapports (voir section Architecture technique pour le détail des 15 étapes).

Le pipeline fonctionne de bout en bout avec Vault, depuis l'initiation jusqu'à la génération et l'utilisation des credentials, sans intervention manuelle de ma part.

Pipeline backend : flux opérationnel complet et validé

J'ai validé une séquence opérationnelle complète. La collecte utilise 10 collecteurs Python qui exécutent en parallèle. Chaque collecteur charge ses credentials Vault, collecte les données de son domaine IT, génère des événements bruts au format JSON et les stocke dans Backend/storage/raw/poleX/YYYYMMDD/.

L'ETL utilise le normaliseur etl_normalize.py qui lit les données brutes, normalise les schémas JSON, déduplique par hash SHA256, enrichit les données de métadonnées, archive automatiquement les données J-1 en compression et stocke dans Backend/storage/processed/.

Le Rules Engine utilise le moteur de règles rules_engine.py qui applique les règles métier configurées, génère des alertes normalisées avec scoring de sévérité et stocke dans Backend/storage/alerts/.

Le Correlation Engine utilise le moteur de corrélation correlation_engine.py qui lit les alertes générées, analyse les alertes multi-pôles, applique les politiques de corrélation configurables et calcule les scores de risque global.

Le pipeline fonctionne de manière autonome. Chaque étape s'initialise correctement avec Vault, et le flux de données est tracé de bout en bout avec des correlation IDs.

Synchronisation Backend vers Frontend : opérationnelle et automatique

J'ai validé un mécanisme de synchronisation automatique. Le script Frontend/scripts/sync-data.mjs copie automatiquement les alertes, corrélations, données agrégées, données brutes et logs depuis Backend vers Frontend/public. Il génère automatiquement artifacts.json et config.json avec les chemins relatifs vers les derniers fichiers.

La synchronisation est fonctionnelle et automatique. Les données remontent vers le frontend après chaque exécution du pipeline, sans intervention manuelle.

Remontée des alertes vers le frontend : validée et opérationnelle

J'ai validé le flux de données complet. Côté frontend, les composants React utilisent alertsRepo.ts et correlationsRepo.ts pour charger les fichiers JSONL, parser et transformer les données au format frontend, et appliquer les filtres dynamiques.

Les alertes sont affichées dans GlobalView.tsx, PoleView.tsx, SeverityHeatmap.tsx, TimelineView.tsx et CorrelationsChart.tsx. Le backend expose également une API FastAPI qui permet de récupérer les alertes via HTTP.

Les alertes remontent correctement vers le frontend et sont affichées dans toutes les vues prévues. Le système est opérationnel de bout en bout.
