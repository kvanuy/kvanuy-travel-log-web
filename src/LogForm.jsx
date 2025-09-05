import { useForm } from "react-hook-form"

export default function exampleDOM() {
  const { register, getValues } = useForm()

  return (
    <form
        onSubmit={handleSubmit(async(e) =>{
            console.log(e)
        })}>
      <input {...register("test")} />
      <input {...register("test1")} />

      <button
        type="button"
        onClick={() => {
          const values = getValues() // { test: "test-input", test1: "test1-input" }
          const singleValue = getValues("test") // "test-input"
          const multipleValues = getValues(["test", "test1"])
          // ["test-input", "test1-input"]
        }}
      >
        Get Values
      </button>
    </form>
  )
}