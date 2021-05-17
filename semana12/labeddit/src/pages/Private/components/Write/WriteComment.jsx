import React from 'react'
import {
  Form, Text, Button, DivButton
} from "./styled";
import {MySendIcon} from "./styledMaterial";
import {postApi} from "../../../../hooks/useRequest";
import config from "../../../config";
import useForm from "../../../../hooks/useForm";

export default function WriteComment({idPost, comments, setComments}){
  const [form, setForm, clearForm] = useForm({text:''})

  const onSubmitForm=(e)=>{
    e.preventDefault()
    postApi(`/posts/${idPost}/comment`,form, config(),(res)=>{
      window.alert('Seu comentário foi enviado.')
      clearForm()
      const newComments = [...comments]
      newComments.push(form)
      setComments(newComments)
    })
  }

  return(
    <Form onSubmit={onSubmitForm}>
      <Text
        placeholder={'Escreva seu comentário...'}
        required
        min={'3'}
        name={'text'}
        value={form.text}
        onChange={setForm}/>
      <DivButton>
        <Button><MySendIcon/></Button>
      </DivButton>
    </Form>
  )
}