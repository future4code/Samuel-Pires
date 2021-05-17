import { useState } from "react";

export default function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = (newForm) => {
    if(typeof newForm==='object'){
      setForm(newForm)
    }
    else setForm(initialForm);
  };

  return [form, onChange, clearForm];
}
