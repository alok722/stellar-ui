import { newSpecPage } from "@stencil/core/testing";
import { Icon } from "./icon";

describe("stellar-icon", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: "<stellar-icon></stellar-icon>",
    });

    expect(root).toEqualHtml(`
      <stellar-icon>
        <mock:shadow-root>
        <span class="icon-pencil icon-m" part="icon-element"></span>
        </mock:shadow-root>
      </stellar-icon>
    `);
  });
});

describe("stellar-icon", () => {
  it("renders the alert component of xl size", async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<stellar-icon name="alert" size="xl"></stellar-icon>',
    });

    expect(root).toEqualHtml(`
      <stellar-icon name="alert" size="xl">
        <mock:shadow-root>
        <span class="icon-alert icon-xl" part="icon-element"></span>
        </mock:shadow-root>
      </stellar-icon>
    `);
  });
});
