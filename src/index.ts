import { render } from "@nativescript-community/solid-js";
import { Application } from "@nativescript/core";
import {
  Br,
  Button,
  Img,
  Input,
  TextArea,
} from "@triniwiz/nativescript-masonkit";
import {
  A,
  Article,
  Aside,
  B,
  Blockquote,
  Code,
  Div,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Li,
  Main,
  Nav,
  P,
  Section,
  Span,
  Strong,
  Ul,
} from "@triniwiz/nativescript-masonkit/web";
import {
  document,
  makeTweakable,
  makeView,
  registerDOMElement,
  scope,
} from "dominative";
import { App } from "./app";

// Register a MasonKit layout-type element (container views).
// Uses makeView with childrenPolicy:'layout' so addChild/insertChild
// are called on the MasonKit view when children are inserted in the DOM.
// (makeLayout can't be used because MasonKit extends CustomLayoutView, not LayoutBase)
function registerMasonLayout(name: string, cls: any) {
  delete (scope as any)[name];
  registerDOMElement(
    name,
    makeTweakable(makeView(cls, { childrenPolicy: "layout" }), null),
  );
}

// Register a MasonKit text-type element.
// Uses makeView with childrenPolicy:'layout' for native child management,
// then patches in text-node handling so DOM text nodes (nodeType 3) trigger
// MasonKit's textProperty which reads childNodes and creates native MasonTextNode instances.
function registerMasonText(name: string, cls: any) {
  const Wrapped = makeView(cls, { childrenPolicy: "layout" });

  const origInsert = Wrapped.prototype.__dominative_onInsertChild;
  Wrapped.prototype.__dominative_onInsertChild = function (
    child: any,
    ref: any,
  ) {
    origInsert.call(this, child, ref);
    if (child.nodeType === 3) {
      this.text = this.textContent;
    }
  };

  const origRemove = Wrapped.prototype.__dominative_onRemoveChild;
  Wrapped.prototype.__dominative_onRemoveChild = function (child: any) {
    origRemove.call(this, child);
    if (child.nodeType === 3) {
      this.text = this.textContent;
    }
  };

  delete (scope as any)[name];
  registerDOMElement(name, makeTweakable(Wrapped, null));
}

// Layout-type elements (container views)
registerMasonLayout("div", Div);
registerMasonLayout("section", Section);
registerMasonLayout("header", Header);
registerMasonLayout("footer", Footer);
registerMasonLayout("article", Article);
registerMasonLayout("main", Main);
registerMasonLayout("nav", Nav);
registerMasonLayout("aside", Aside);
registerMasonLayout("ul", Ul);
registerMasonLayout("img", Img);
registerMasonLayout("br", Br);
registerMasonLayout("input", Input);
registerMasonLayout("textarea", TextArea);

// Text-type elements (text content views)
registerMasonText("span", Span);
registerMasonText("code", Code);
registerMasonText("h1", H1);
registerMasonText("h2", H2);
registerMasonText("h3", H3);
registerMasonText("h4", H4);
registerMasonText("h5", H5);
registerMasonText("h6", H6);
registerMasonText("p", P);
registerMasonText("li", Li);
registerMasonText("blockquote", Blockquote);
registerMasonText("b", B);
registerMasonText("strong", Strong);
registerMasonText("a", A);
registerMasonText("button", Button);

Application.run({
  create: () => {
    render(App, document.body);
    return document;
  },
});
