<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-primary"
  >
    <div class="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-semibold text-center mb-6">Our Education</h1>
      <el-collapse v-model="activeNames" @change="handleChange">
        <!-- Chemistry Section -->
        <el-collapse-item title="Chemistry" name="1">
          <div>
            <b>Consistency:</b> Chemical reactions follow established laws
            (e.g., conservation of mass and energy). Ensure adherence to these
            laws in experiments and problem-solving.
          </div>
          <div>
            <b>Feedback:</b> Indicators like color changes or gas evolution
            provide immediate feedback during chemical reactions.
          </div>
          <div>
            <b>Efficiency:</b> Simplify complex processes, such as balancing
            equations, by following step-by-step rules.
          </div>
          <div>
            <b>Controllability:</b> Reactions can be controlled by adjusting
            variables like temperature, concentration, or catalysts.
          </div>
        </el-collapse-item>
        <!-- Physics Section -->
        <el-collapse-item title="Physics" name="2">
          <div>
            <b>Consistency:</b> Physics relies on universal laws like Newton's
            laws or the laws of thermodynamics that must be consistently
            applied.
          </div>
          <div>
            <b>Feedback:</b> Real-world phenomena, such as motion or energy
            transfer, provide visual and measurable feedback.
          </div>
          <div>
            <b>Efficiency:</b> Apply shortcuts like formulas and dimensional
            analysis to simplify problem-solving.
          </div>
          <div>
            <b>Controllability:</b> Experiments allow control over variables
            such as force, velocity, or pressure to test hypotheses.
          </div>
        </el-collapse-item>
        <!-- Biology Section -->
        <el-collapse-item title="Biology" name="3">
          <div>
            <b>Consistency:</b> Biological systems adhere to patterns, such as
            DNA replication and cell division, which are predictable and
            structured.
          </div>
          <div>
            <b>Feedback:</b> Responses like growth, movement, or metabolic
            changes provide clear feedback in biological experiments.
          </div>
          <div>
            <b>Efficiency:</b> Utilize models like food chains, life cycles, or
            genetic diagrams to quickly understand complex interactions.
          </div>
          <div>
            <b>Controllability:</b> Conditions like light, nutrients, or
            temperature can be manipulated to study biological processes.
          </div>
        </el-collapse-item>
        <!-- Mathematics Section -->
        <el-collapse-item title="Mathematics" name="4">
          <div>
            <b>Consistency:</b> Mathematical rules and properties (e.g.,
            associative, commutative) ensure consistent problem-solving methods.
          </div>
          <div>
            <b>Feedback:</b> Immediate feedback is achieved by verifying results
            through calculations or graphs.
          </div>
          <div>
            <b>Efficiency:</b> Use formulas, algorithms, and heuristics to solve
            problems effectively.
          </div>
          <div>
            <b>Controllability:</b> Break down problems into smaller steps,
            giving control over the pace and approach to solving them.
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- Navigation Button -->
    <nuxt-link to="/">
      <Button
        size="14"
        hoverBgColor="bg-blue-700"
        textColor="text-white"
        class="border-2 mt-4 px-4 py-4"
        >Go To LogIn</Button
      >
    </nuxt-link>
  </div>
</template>

<script>
import Button from "@/components/Atoms/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
