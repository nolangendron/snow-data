import size from "./size";

export default {
  spacing: "1rem",
  display: 'grid',
  height: '100vh',
  "grid-template-rows": `${size.headerHeight} 1fr ${size.footerHeight}`,
  "grid-template-columns": `${size.navBarWidth} 1fr`,
  "grid-template-area": `header header
                        nav main
                        footer footer`
}