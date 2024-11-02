import { ref } from "vue";

export function useInputNumber() {
  const number = ref(1);

  const increment = () => {
    number.value++;
  };

  const decrement = () => {
    if (number.value > 1) {
      number.value--;
    }
  };

  const handleNumberChanged = (event: Event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    if (event.target.valueAsNumber < 1) {
      event.target.valueAsNumber = 1;
    } else {
      number.value = event.target.valueAsNumber;
    }
  };

  return {
    number,
    increment,
    decrement,
    handleNumberChanged,
  };
}
