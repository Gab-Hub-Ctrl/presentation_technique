Introduction : du besoin à la réalisation

Ce document présente l'introduction au projet IT Dashboard A+, en détaillant le besoin initial, le défi technique, l'approche retenue, et l'évolution du projet. Cette section est fondamentale car elle pose le contexte de réalisation et explique les motivations qui ont conduit à la création de ce projet. L'objectif est de comprendre comment un besoin simple de structuration de veille technologique a évolué vers un Proof of Concept opérationnel complexe. Cette introduction permet de mieux appréhender les sections suivantes qui détaillent l'architecture, les fonctionnalités, et la gouvernance du projet. Pour plus de détails sur ma relation avec l'IA, voir `02_relation_ia.md`. Pour comprendre les problèmes rencontrés et leurs solutions, voir `05_resolution_problemes.md`.

Le besoin initial

J'ai identifié un besoin : disposer d'une source de vérité sur l'actualité et les signaux faibles du monde IT, notamment en sécurité, cloud, développement, systèmes et IA. J'avais besoin de structurer ma veille et de rester à jour.

Mon objectif initial était de concevoir un dashboard interactif capable d'agréger, analyser et corréler des informations IT, en s'appuyant sur l'IA générative comme outil d'analyse, de synthèse et d'aide à la décision.

J'ai conçu ce projet comme un laboratoire d'apprentissage appliqué, avec des contraintes proches d'un environnement professionnel : portabilité, auditabilité, traçabilité et gouvernance.

Le défi technique et l'approche retenue

Mon point de départ était très limité. Je partais de zéro connaissance en développement, avec seulement quelques bases en scripting issues de ma formation de Technicien Assistance Informatique. Je n'avais aucune formation structurée en développement, architecture ou IA. Je n'utilisais que des IA publiques, des outils gratuits moins performants que les solutions professionnelles. J'avais trois mois au total pour tout concevoir et implémenter.

J'ai choisi d'utiliser des IA publiques comme outil d'apprentissage actif. Mon objectif était de comprendre progressivement les concepts techniques, structurer une architecture cohérente, et apprendre à documenter, tester et maintenir un projet complexe.

J'ai travaillé deux mois et demi avec des IA locales uniquement. J'ai créé les prompts maîtres en cherchant une cohérence totale. INIT_SEQUENCE est né de la nécessité de résoudre la perte de contexte. Cursor m'a permis d'augmenter ma productivité pendant les deux dernières semaines. Au total, j'ai consacré trois mois à concevoir et implémenter ce projet.

Évolution du projet : de l'idée au POC opérationnel

Mon projet a évolué vers un Proof of Concept conceptuel fortement structuré et opérationnel. ProjectModule.psm1 assure une portabilité maximale. L'architecture est modulaire. L'archivage et la rétention sont automatiques. La traçabilité passe par des logs standardisés et des correlation IDs. Vault est intégré et opérationnel. Le pipeline fonctionne de bout en bout. La synchronisation Backend vers Frontend est automatique. Les alertes remontent correctement.

Le projet fonctionne exclusivement en local. Le backend n'est pas encore exposé via une API publique complète. Cette exposition est une évolution que je prévois.

Évolution organique du projet

L'évolution de mon projet suit une approche itérative naturelle : chaque problème rencontré devient une opportunité d'amélioration. Cette évolution organique illustre ma façon de résoudre les problèmes.

Le besoin initial était de structurer ma veille technologique IT. J'ai choisi d'utiliser l'IA comme outil d'apprentissage et de développement (Solution 1). Cependant, j'ai rapidement rencontré un problème : la perte de contexte avec l'IA à chaque nouvelle session. Pour résoudre ce problème, j'ai créé 11 prompts fondateurs structurés et cohérents (Solution 2).

Cette solution a elle-même créé un nouveau défi : comment reprendre efficacement le projet après une interruption ? J'ai donc développé INIT_SEQUENCE, un système de gouvernance IA basé sur une machine à états finis (Solution 3). Ce système permet de reconstruire l'état logique du projet et de garantir la continuité du travail.

Face à un autre problème récurrent, la nécessité de répéter les mêmes instructions à l'IA, j'ai créé les Standards Projet3, un framework de 31 standards organisés en 8 catégories (Solution 4). Ces standards servent de référence permanente et réutilisable pour garantir la cohérence et la qualité.

Cette évolution illustre mon approche naturelle de résolution de problèmes : quand je rencontre un problème, je cherche naturellement une solution adaptée. Chaque solution devient alors la base pour la suivante, créant un système qui s'améliore continuellement.

Contexte de réalisation

Ce qui rend ce projet intéressant n'est pas seulement son résultat technique final, mais le contexte dans lequel je l'ai réalisé.

En partant de zéro, j'ai créé INIT_SEQUENCE_ITD-A+, un système complet de gouvernance IA basé sur une machine à états finis (voir section INIT_SEQUENCE). Onze prompts fondateurs ont été créés ex nihilo pour structurer la communication avec l'IA. J'ai imaginé et implémenté une solution d'archivage automatique (voir section Résolution de problèmes). ProjectModule.psm1 assure une portabilité maximale (voir section Architecture technique). Des menus CLI et une orchestration complète automatisent les opérations. Le pipeline Backend et Frontend fonctionne de bout en bout (voir section Fonctionnalités opérationnelles).

Réaliser ce projet dans ce contexte témoigne d'une capacité d'apprentissage autonome et d'un potentiel d'évolution. Ce qui est significatif, c'est la rapidité d'apprentissage, la capacité à structurer, innover et résoudre des problèmes complexes en partant de zéro, et la persévérance face aux limitations des outils disponibles.
