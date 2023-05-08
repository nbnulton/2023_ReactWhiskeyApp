import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseWhiskeyName, chooseWhiskeyImageID } from "../redux/slices/RootSlice";

// interfaces

interface WhiskeyFormProps {
  id?: string[]
}

const WhiskeyForm = (props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.whiskey_name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseWhiskeyName(data.whiskey_name));
      dispatch(chooseWhiskeyImageID(data.whiskey_image_id));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="whiskey_name">Whiskey Name</label>
          <Input {...register('whiskey_name')} name='whiskey_name' placeholder="Whiskey Name"/>
        </div>
        <div>
          <label htmlFor="whiskey_image_id">Whiskey Image ID</label>
          <Input {...register('whiskey_image_id')} name='whiskey_image_id' placeholder="Whiskey Image ID"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm