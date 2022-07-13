import first from './src/utils/first'

var x = first([
  () => {
    return undefined
  },
  () => {
    return null
  },
  () => {
    return false
  },
  () => {
    return 2
  },
])

console.log(x().then(res=>{
  console.log(res,'res')
}), '111')


