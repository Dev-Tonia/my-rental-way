// import React, { Children } from 'react'

export default function RoundedForm({
  children,
  formTitle,
  btnTitle,
  btnClass = "",
  submitForm,
}) {
  return (
    <div className="wrapper  my-20 md:my-32">
      <div className=" bg-[#FAFAFA] rounded-[50px] py-10 px-5 sm:px-10 md:px-16">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          {formTitle}
        </h2>
        <form action="" method="POST" onSubmit={submitForm}>
          {children}
          <div className={`flex items-center justify-center py-20 ${btnClass}`}>
            <button type="submit" className=" btn">
              {btnTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
