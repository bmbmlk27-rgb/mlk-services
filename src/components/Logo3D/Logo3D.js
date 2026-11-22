// Logo MLK SERVICES en relief, réutilisable (navbar, pied de page…).
// La forme vient de /images/logo-mask.png ; les couleurs suivent le thème
// via les variables CSS --logo-color et --logo-base.
export function Logo3D({ depth = 8, className = '', label = 'MLK SERVICES' } = {}) {
  const layers = Array.from({ length: depth }, (_, i) =>
    `<span class="mlk-logo3d__layer" style="--z:${i}"></span>`).join('');
  return `
    <span class="mlk-logo3d ${className}" role="img" aria-label="${label}" style="--depth:${depth}">
      <span class="mlk-logo3d__inner">
        ${layers}
        <span class="mlk-logo3d__face"></span>
        <span class="mlk-logo3d__shine"></span>
      </span>
    </span>
  `;
}
