import { defineComponent } from "vue";
import { ElCollapse, ElCollapseItem } from "element-plus";

export default {
  title: "Organisms/CollapseEducation",
  component: ElCollapse,
};

const Template = (args: any) => ({
  components: { ElCollapse, ElCollapseItem },
  setup() {
    return { args };
  },
  template: `
    <el-collapse v-bind="args">
      <el-collapse-item title="Chemistry" name="1">
        <div><b>Consistency:</b> Chemical reactions follow laws.</div>
      </el-collapse-item>
      <el-collapse-item title="Physics" name="2">
        <div><b>Consistency:</b> Universal laws in Physics.</div>
      </el-collapse-item>
      <el-collapse-item title="Biology" name="3">
        <div><b>Consistency:</b> Biological systems follow patterns.</div>
      </el-collapse-item>
      <el-collapse-item title="Mathematics" name="4">
        <div><b>Consistency:</b> Mathematical rules ensure consistency.</div>
      </el-collapse-item>
    </el-collapse>
  `,
  // Apply custom styles
  style: `
    .el-collapse-item__header i {
      font-size: 0.1em; /* Reduces icon size by 90% */
    }
  `,
});

export const Default = Template.bind({});
