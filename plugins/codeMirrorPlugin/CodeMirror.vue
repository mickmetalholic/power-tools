<template>
  <div
    ref="container"
    class="code-mirror-container"
    :style="{ height: '100%' }"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { basicSetup } from '@codemirror/basic-setup'
import { EditorView, ViewUpdate } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { json } from '@codemirror/lang-json'

export default Vue.extend({
  name: 'CodeMirror',
  props: {
    value: String,
  },
  data() {
    const tabSizeCompartment = new Compartment()

    const state = EditorState.create({
      doc: this.$props.value,
      extensions: [
        basicSetup,
        tabSizeCompartment.of(EditorState.tabSize.of(2)),
        EditorView.updateListener.of((v: ViewUpdate) => {
          this.$emit('input', v.state.doc.toString())
        }),
        oneDark,
        json(),
      ],
    })

    return {
      tabSizeCompartment,
      state,
      view: null as null | EditorView,
    }
  },
  mounted() {
    const { state } = this
    this.view = new EditorView({
      state,
      parent: this.$refs.container as Element,
    })
  },
  methods: {
    setTabSize(size: number): void {
      const { view, tabSizeCompartment } = this
      view &&
        view.dispatch({
          effects: tabSizeCompartment.reconfigure(EditorState.tabSize.of(size)),
        })
    },
  },
})
</script>

<style lang="scss">
.cm-editor,
.cm-scroller {
  overflow: auto;
  height: 100%;
}
</style>
