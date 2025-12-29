Stratégie d'amélioration continue : collecte de feedback utilisateurs

Ce document détaille la stratégie d'amélioration continue mise en place pour le projet. Cette section est importante car elle démontre la capacité à créer des mécanismes de collecte de feedback structurés et à utiliser ces retours pour améliorer continuellement le projet. L'objectif est de présenter les outils de collecte de feedback, les plans de test utilisateurs, et la distribution du projet. Nous allons explorer le formulaire de feedback, les parcours de test, et les mécanismes de distribution. Pour comprendre l'état actuel du projet, voir `14_conclusion.md` (section État actuel). Pour explorer les évolutions prévues, voir `10_evolutions_prevues.md`.

Formulaire de feedback : outil de collecte structurée

J'ai développé un formulaire de feedback complet dans FeedbackView.tsx qui permet de collecter deux types de retours.

Pour les retours professionnels destinés aux personnes techniques, le formulaire collecte des informations sur la configuration Vault, l'expérience avec le pipeline, la qualité des alertes générées, les problèmes techniques rencontrés et les suggestions d'amélioration de l'architecture.

Pour les retours néophytes destinés aux utilisateurs non techniques, le formulaire évalue l'expérience utilisateur de l'interface frontend, la pertinence des visualisations, les difficultés de compréhension des alertes et les suggestions d'amélioration de l'UX et de l'UI.

Le formulaire inclut une validation stricte avec validation complète de l'email, limites de mots et sanitization. Il stocke les retours via l'API backend Backend/api/routes/feedback.py. Les données sont stockées de manière structurée dans Projet_Dashboard_IT_IA_Bridgepoint/feedback/.

Plan de test utilisateurs : deux parcours distincts

Mon objectif est de collecter des informations structurées pour améliorer continuellement le projet.

Pour le parcours technique destiné aux personnes avec compétences IT, les testeurs doivent configurer complètement Vault, lancer le pipeline complet, et fournir un feedback structuré via le formulaire frontend.

Pour le parcours néophyte destiné aux utilisateurs sans compétences techniques, les testeurs reçoivent uniquement l'interface visuelle avec le frontend pré-configuré, se concentrent sur l'UX et l'UI, et fournissent un feedback structuré via le formulaire frontend en mode néophyte.

Distribution du projet : clés USB et copies locales

Le projet n'étant pas branché en public, sans repository GitHub public, la distribution se fait via clés USB avec le projet complet, la documentation et les guides de test. Je distribue également des copies locales via partage réseau avec instructions d'accès.

Export d'arborescence : automatisation opérationnelle

J'ai mis en place un système d'export d'arborescence qui génère automatiquement la structure complète du projet. Le script d'export Tools/arborescence/scripts/Export-Arborescence.ps1 génère automatiquement des arborescences horodatées pour Backend, Frontend et la racine du projet. L'export se fait automatiquement vers Projet_Dashboard_IT_IA_Bridgepoint/arborescence/.

L'export d'arborescence est fonctionnel et permet de documenter automatiquement la structure du projet pour faciliter la reprise et la synchronisation.
