import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
// step-1
import { useFieldArray } from "react-hook-form";
const YoutubeForm = () => {
  const form = useForm({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/3"
      );
      const data = await response.json();
      return {
        username: data.username,
        email: data.email,
        channel: "knocknok",
        social: {
          twitter: "red@123",
          facebook: "techlead#657",
        },
        phoneNumber: ["9845632178", "8541236548"],
        // step-2
        phNumber: [{ number: "" }],
        age: 0,
        date: new Date(),
      };
    },
    mode:'onBlur'
  });
  const {
    register,
    handleSubmit,
    control,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const { errors, touchedFields, isDirty, dirtyFields, isValid  ,isSubmitting,isSubmitted,isSubmitSuccessful,submitCount } = formState;
  // console.log("istouchedfield ", touchedFields);
  // console.log("isDirty", isDirty);
  // console.log("isdirtyfield", dirtyFields);
  console.log({isSubmitting,isSubmitted,isSubmitSuccessful,submitCount });
  //   step-3
  const { fields, append, remove } = useFieldArray({
    name: "phNumber",
    control,
  });
  const onSubmit = (data) => {
    console.log("Form is submitted", data);
  };
  const onError = (error) => {
    // console.log("error is", error);
  };

  // const watchform = watch()
  // using watch callback -- This will not rerender element
  useEffect(() => {
    const subscription = watch((value) => {
      // console.log("value is", value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful,reset])

  const handleGetValues = () => {
    // console.log("Get values", getValues());
    // console.log("Get values", getValues("social"));
    // console.log("Get values", getValues(["email", "age", "date"]));
  };

  const handleSetValues = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
    setValue("social.twitter", "", {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };
  return (
    <div className="flex justify-center items-center">
      {/* <h1>Form values :{JSON.stringify(watchform)}</h1> */}

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
        className="border-2  border-black rounded-md flex flex-col justify-evenly gap-2 py-4 items-start px-6 bg-gray-300 m-4"
      >
        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            {...register("username", {
              required: {
                value: "true",
                message: "Username is required",
              },
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.username?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name=""
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid Email Format",
              },
              validate:{
                emailValidate : async (fieldValue)=>{
                  const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                  const data = await response.json()
                  return data.length==0 || "Email already exist"
               }
              }
              
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.email?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="channel">Channel:</label>
          <input
            type="text"
            name="channel"
            id="channel"
            {...register("channel", {
              required: "channel name is required",
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.channel?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="twitter">Twiiter Id:</label>
          <input
            type="text"
            name="twitter"
            id="twitter"
            {...register("social.twitter", {
              disabled: watch("username") === "",
              required: "twitter id is required",
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.social?.twitter?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="facebook">Facebook Id:</label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            {...register("social.facebook", {
              required: "facebook id is required",
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.social?.facebook?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="primary">Primary Contact No:</label>
          <input
            type="text"
            id="primary"
            {...register("phoneNumber.0", {
              pattern: {
                value: /^\d{10}$/,
                message: "Invalid phone no.",
              },
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.phoneNumber?.[0]?.message}</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="secondary">Secondary Contact No:</label>
          <input
            type="text"
            id="secondary"
            {...register("phoneNumber.1", {
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "Invalid phone no.",
              },
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.phoneNumber?.[1]?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          {/* step-4 */}
          <label htmlFor="phNumber">List of phone Numbers:</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    id="phNumber"
                    type="text"
                    {...register(`phNumber.${index}.number`)}
                    className="border-2 border-black pl-1"
                  />{" "}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="border-2 border-red-400 mb-3 px-2 py-1 rounded-xl bg-blue-200"
                    >
                      remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <br />
          <button
            type="button"
            onClick={() => append({ number: "" })}
            className="border-2 border-green-950 mb-3 px-2 py-1 rounded-xl bg-blue-200"
          >
            Add phone Number
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.age?.message}</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="channel"
            {...register("date", {
              valueAsDate: true,
              required: "date is required",
            })}
            className="border-2 border-black pl-1"
          />
          <p className="text-red-600">{errors?.date?.message}</p>
        </div>

        <button
          disabled={!isDirty}
          className="border-2 border-black mb-3 px-2 py-1 rounded-xl bg-blue-200"
        >
          Submit
        </button>
        <button
           onClick={()=>reset()}
          className="border-2 border-black mb-3 px-2 py-1 rounded-xl bg-blue-200"
        >
          reset
        </button>
        <button
          type="button"
          onClick={handleGetValues}
          className="border-2 border-black mb-3 px-2 py-1 rounded-xl bg-blue-200"
        >
          Get values
        </button>
        <button
          type="button"
          onClick={handleSetValues}
          className="border-2 border-black mb-3 px-2 py-1 rounded-xl bg-blue-200"
        >
          Set values
        </button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default YoutubeForm;
