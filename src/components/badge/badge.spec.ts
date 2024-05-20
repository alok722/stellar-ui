import { newSpecPage } from "@stencil/core/testing";
import { Badge } from "./badge";

describe("stellar-badge", () => {
  it("renders the default component", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: "<stellar-badge></stellar-badge>",
    });

    expect(root).toEqualHtml(`
      <stellar-badge>
        <mock:shadow-root>
        <span class="badge default"></span>
        </mock:shadow-root>
      </stellar-badge>
    `);
  });

  it("renders the success type badge with value 88", async () => {
    const { root } = await newSpecPage({
      components: [Badge],
      html: '<stellar-badge variant="success" text="88"></stellar-badge>',
    });

    expect(root).toEqualHtml(`
      <stellar-badge text="88" variant="success">
        <mock:shadow-root>
        <span class="badge success">88</span>
        </mock:shadow-root>
      </stellar-badge>
    `);
  });
});
