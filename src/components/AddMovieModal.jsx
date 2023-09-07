import React, { useState } from "react";
import { useGlobleMovies } from "../context/videoContext";

const AddMovieModal = ({setModal}) => {
  const { AddMovie, FormInputHandler, inputData } =
    useGlobleMovies();

    const submitHandler = (e)=>{
        e.preventDefault();
        AddMovie(inputData)


    }

  return <div className=" fixed inset-0 bg-black/20 flex justify-center items-center p-4">

    <form onSubmit={submitHandler} className="flex flex-col gap-2 justify-center bg-white w-[400px] h-[700px] p-5">
        
        <label htmlFor="">title</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.title} type="text" name="title" id="title" />
        <label htmlFor="">summary</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.summary} type="text" name="summary" id="summary" />
        <label htmlFor="">imageURL</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.imageURL} type="url" name="imageURL" id="imageURL" />

        <label htmlFor="">year</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.year} type="nuber" name="year" id="year" />

        <label htmlFor="">genre</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.genre} type="text" name="genre" id="" />

        <label htmlFor="">rating</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.rating} type="number" name="rating" id="rating" />

        <label htmlFor="">director</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.director} type="text" name="director" id="director" />

        <label htmlFor="">writer</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.writer} type="text" name="writer" id="writer" />

        <label htmlFor="">cast</label>
        <input className="border-[1px] text-black" onChange={FormInputHandler} value={inputData.cast} type="text" name="cast" id="cast" />

       <button className="bg-cyan-600" type="submit" >Add Movie</button>
       <button className="bg-cyan-600" onClick={()=>setModal(false)}>cancel</button>
    </form>
    
  </div>;
};

export default AddMovieModal;
