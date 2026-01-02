/**
 * ============================================
 * INTRODUCTION
 * Ce fichier JavaScript centralise les utilitaires
 * communs utilisés par toutes les pages HTML du
 * dossier presentation_technique. Cette centralisation
 * permet d'optimiser les performances, d'améliorer
 * l'accessibilité et de faciliter la maintenance
 * du code client. Les fonctionnalités incluent
 * le debounce, le throttle, le lazy loading des
 * images, les animations au scroll, la gestion
 * des erreurs et le monitoring des performances.
 * ============================================
 */

/**
 * Fonction debounce pour les événements de scroll.
 * Cette fonction réduit le nombre d'appels de fonction
 * pendant le scroll en retardant l'exécution jusqu'à
 * ce que le temps d'attente spécifié se soit écoulé
 * depuis le dernier appel. Cette optimisation améliore
 * les performances en évitant les calculs excessifs.
 * 
 * @param {Function} func - La fonction à debouncer.
 * @param {number} wait - Le nombre de millisecondes à attendre.
 * @returns {Function} La fonction debouncée.
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Fonction throttle pour les événements de scroll.
 * Cette fonction limite les appels de fonction à une fois
 * par intervalle de temps spécifié. Elle garantit que
 * la fonction est appelée au maximum une fois toutes
 * les 'limit' millisecondes. Cette optimisation est
 * utile pour les événements fréquents comme le scroll.
 * 
 * @param {Function} func - La fonction à throttler.
 * @param {number} limit - La limite de temps en millisecondes.
 * @returns {Function} La fonction throttlée.
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Chargement différé des images.
 * Après avoir défini les fonctions d'optimisation
 * des événements, cette section implémente le
 * chargement différé des images. Les images sont
 * chargées uniquement lorsqu'elles entrent dans
 * le viewport, ce qui améliore les performances
 * de chargement initial de la page.
 */
(function() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    /* Observer toutes les images avec l'attribut data-src. */
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    /* Solution de repli pour les navigateurs sans IntersectionObserver. */
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    });
  }
})();

/**
 * Intersection Observer pour les animations au scroll.
 * Cette section implémente les animations déclenchées
 * uniquement lorsque les éléments entrent dans le
 * viewport. Cette approche améliore les performances
 * en évitant les animations inutiles pour les éléments
 * non visibles et améliore l'expérience utilisateur.
 */
(function() {
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    /* Observer toutes les cartes et sections. */
    document.querySelectorAll('.card, section').forEach(element => {
      observer.observe(element);
    });
  }
})();

/**
 * Gestion des erreurs et journalisation.
 * Après avoir implémenté les optimisations de
 * chargement et d'animation, cette section
 * gère les erreurs JavaScript globales. La
 * gestion centralisée des erreurs permet de
 * détecter et de journaliser les problèmes
 * pour faciliter le débogage et le monitoring.
 */
window.addEventListener('error', function(e) {
  console.error('Error:', e.error);
  /* En production, envoyer vers un service de suivi des erreurs. */
  /* Exemple : sendToErrorTracking(e.error); */
});

/**
 * Monitoring des performances - Web Vitals.
 * Cette dernière section implémente le monitoring
 * des performances en utilisant l'API PerformanceObserver.
 * Le monitoring des performances permet de mesurer
 * les métriques Web Vitals et d'identifier les
 * opportunités d'optimisation pour améliorer
 * l'expérience utilisateur.
 */
if ('PerformanceObserver' in window) {
  try {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        /* Journaliser les métriques de performance. */
        if (entry.entryType === 'navigation') {
          console.log('Page Load Time:', entry.loadEventEnd - entry.fetchStart, 'ms');
        }
        /* En production, envoyer vers un service d'analytics. */
        /* Exemple : sendToAnalytics('performance', entry); */
      }
    });
    perfObserver.observe({ entryTypes: ['navigation', 'measure'] });
  } catch (e) {
    console.warn('Performance Observer n\'est pas entièrement supporté');
  }
}

/**
 * Fonction pour ouvrir/fermer les sections accordéon.
 * Cette fonction permet de basculer l'état actif/inactif
 * d'une section accordéon en ajoutant ou retirant la classe
 * 'active' sur l'élément parent. Cette fonctionnalité est
 * utilisée pour créer des sections repliables qui améliorent
 * la lisibilité et réduisent l'encombrement visuel.
 * 
 * @param {HTMLElement} element - L'élément header de l'accordéon cliqué.
 */
function toggleSection(element) {
  const section = element.parentElement;
  section.classList.toggle('active');
}

/**
 * Initialisation des accordéons au chargement de la page.
 * Aucun accordéon ne s'ouvre automatiquement.
 * Les accordéons s'ouvrent uniquement si la classe 'active'
 * est déjà présente dans le HTML ou si l'utilisateur clique dessus.
 */
document.addEventListener('DOMContentLoaded', function() {
  // Ne jamais ouvrir automatiquement un accordéon
  // Les accordéons avec la classe 'active' dans le HTML restent ouverts
  // Les autres restent fermés jusqu'à ce que l'utilisateur clique dessus
});

