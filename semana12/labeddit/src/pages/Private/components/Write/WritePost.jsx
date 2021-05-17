import React from 'react'
import {
  Form, Title, Text, Button, DivButton
} from "./styled";
import {MySendIcon} from "./styledMaterial";
import useForm from "../../../../hooks/useForm";
import {postApi} from "../../../../hooks/useRequest";
import config from "../../../config";

export default function WritePost(){
  const [form, setForm] = useForm({title:'',text:''})

  const onSubmitForm=(e)=>{
    e.preventDefault()
    postApi('/posts',form, config(),(res)=>{
      window.alert('Seu post foi enviado com sucesso')
    })
  }

  return(
    <Form onSubmit={onSubmitForm}>
      <Title placeholder={'Título...'} required min={'3'} name={'title'} value={form.title} onChange={setForm}/>
      <Text placeholder={'Escreva seu post...'} required min={'3'} name={'text'} value={form.text} onChange={setForm}/>
      <DivButton>
        <Button><MySendIcon/></Button>
      </DivButton>
    </Form>
  )
}