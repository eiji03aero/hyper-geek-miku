const colors = {
  black: '#222',
  blackLight: '#333',
  grey: '#777',
  greyDark: '#555',
  darkGreen: '#182A33',
  whiteDark: '#D4D7D9',
};

const gutter = 16;
const headerHeight = 34;
const footerHeight = 30;
const sidebarWidth = 200;

const centerContainer = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clickable = `
  opacity: 0.8;
  cursor: pointer;
`;

const transitionAll = `
  transition: all .25s ease-in-out 0s;
`;

const transparentStyle = `
  position: fixed;
  top: ${footerHeight}px;
  bottom: ${footerHeight}px;
  right: 0;
  opacity: 0.95;
  z-index: 5;
`;

exports.getCss = defaultStyle => `
  ${defaultStyle || ''}

  .geek-miku {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    padding: 10px 5px;
    background-color: ${colors.darkGreen};
    ${transparentStyle}
    transform: translateX(${sidebarWidth}px);
    transition: transform .25s ease-in-out 0s;

    &.is_shown {
      transform: translateX(0px);
    }

    &-box {
      text-align: center;
      &:last-of-type {
        margin-top: auto !important;
      }
    }

    img.top-icon {
      width: 60%;
    }

    .menu-button-container {
      display: flex;
      flex-direction: column;

      .menu-button {
        ${centerContainer}
        height: 30px;
        margin: 3px 0;
        background-color: ${colors.blackLight};
        color: ${colors.grey};
        border: 3px solid ${colors.greyDark};
        border-radius: 2px;

        &:hover {
          ${clickable}
          ${transitionAll}
          color: ${colors.whiteDark};
          border-color: ${colors.whiteDark};
        }
      }
    }

    .geek-miku-box + .geek-miku-box {
      margin-top: ${gutter / 2}px;
      &:last-of-type {
        margin-top: auto;
      }
    }
  }


  .geek-miku-container {
    div { box-sizing: border-box;}
    img { width: 100%; }

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .term-fit {
      flex: 1;
    }
    .geek-miku {
      width: ${sidebarWidth}px;
    }
  }
`;
