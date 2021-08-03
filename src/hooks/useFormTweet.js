import { ref } from "vue";

export default function useFormTweet() {
  const showForm = ref(false)

  // interruptor
  const openCloseForm = () => {
    showForm.value = !showForm.value
  }

  return {
    showForm,
    openCloseForm
  }
}