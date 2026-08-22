# Medidas y Resoluciones de Pantalla

Este documento almacena las resoluciones reales y escaladas de los entornos de prueba principales del proyecto. Es fundamental tener en cuenta la escala (zoom) del sistema operativo, ya que CSS y los media queries (`@media`) responden a los **píxeles lógicos**, no a la resolución física total.

## 1. Laptop
- **Resolución Física:** `2520 x 1680`
- **Escala / Zoom de Windows:** `150%`
- **Resolución Lógica (CSS):** `1680px de ancho`
  - *Cálculo: 2520 / 1.5 = 1680px*
- **Comportamiento esperado:** Debe mostrar **8 elementos** por defecto (grid de 4 columnas en 2 filas) porque no llega a sobrepasar el breakpoint de monitores extra grandes.

## 2. Monitor Externo (Grande)
- **Resolución Física:** `2560 x 1440`
- **Escala / Zoom de Windows:** `100%`
- **Resolución Lógica (CSS):** `2560px de ancho`
  - *Cálculo: 2560 / 1.0 = 2560px*
- **Comportamiento esperado:** Debe mostrar **12 elementos** por defecto (grid expandido a 6 columnas en 2 filas) gracias a que supera con creces el breakpoint de monitores extra grandes.

## 3. Dispositivos Móviles
- **Resolución:** "Normal" (Típicamente entre `360px` y `430px` de ancho lógico).
- **Comportamiento esperado:** Se utiliza la vista de una o dos columnas nativa, adaptándose dinámicamente con los breakpoints de Tailwind (`sm:`, `md:`).

---

### Notas sobre los Breakpoints Actuales (`globals.css`)

Actualmente hemos definido un breakpoint personalizado para monitores grandes en `1700px`:
```css
@media (min-width: 1700px) { ... }
```
Dado que la Laptop tiene un ancho lógico de `1680px` y el Monitor un ancho de `2560px`, el breakpoint de `1700px` **es perfecto**. Separa exactamente ambos entornos sin que choquen, asegurando que la laptop vea la interfaz "normal" y el monitor grande vea la interfaz "expandida" con 12 entradas.
