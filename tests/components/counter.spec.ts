import Counter from "@/components/Counter.vue";
import { mount } from "@vue/test-utils";

describe("counter.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(Counter);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
