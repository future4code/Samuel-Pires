import {performPurchase, User} from "../src/performPurchase";

test('Testando saldo maior que valor', ()=>{
  const user : User = {
    name: "Samuel",
    balance: 1500
  }
  const result = performPurchase(user, 1300)
  expect(result).toEqual({
    name: "Samuel",
    balance: 200
  })
})

test('Testando saldo igual ao valor', ()=>{
  const user : User = {
    name: "Samuel",
    balance: 1500
  }
  const result = performPurchase(user, 1500)
  expect(result).toEqual({
    name: "Samuel",
    balance: 0
  })
})

test('Testando saldo menor que valor', ()=>{
  const user : User = {
    name: "Samuel",
    balance: 1500
  }
  const result = performPurchase(user, 1700)
  expect(result).not.toBeDefined()
})