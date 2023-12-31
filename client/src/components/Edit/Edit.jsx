import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import style from "./Edit.module.css"

import { NotifyContext } from "../../contexts/notificationContext";
import * as offerService from "../../services/offerService"

export const Edit = () => {
  
  const navigate = useNavigate();

  const {setNotify} = useContext(NotifyContext)

  const {id} = useParams()

  const [inputs, setInputs] = useState({});

  useEffect(() => {
     offerService.getById(id)
     .then(res => setInputs({
      title: {value: res.title, hasError: false, errMsg: ''},
      category: {value: res.category, hasError: false, errMsg: ''},
      salary: {value: res.salary, hasError: false, errMsg: ''},
      description: {value: res.description, hasError: false, errMsg: ''},
      imageUrl: {value: res.imageUrl, hasError: false, errMsg: ''},
      requirements: {value: res.requirements, hasError: false, errMsg: ''}
    }))
     .catch(err => setNotify({opened: true, msg: err.message}))
  }, [id, setNotify])




  const onInputChange = (e) => {
    const change = { [e.target.name]: e.target.value };
    setInputs((old) => ({ ...old, ...change }));
  };

  const onCreateSubmit = async (e) => {
    e.preventDefault();

    const sentData = (Object.entries(inputs))
    .map((([a, b]) => ({[a]: b.value})))
    .reduce((acc, cur) => Object.assign(acc, cur), {})

    try {
      await offerService.edit(sentData, id);
      navigate(`/details/${id}`);
    } catch (error) {
      setNotify({opened: true, msg: error.message})
    }
  };


  const onInputValidation = (e) => {

    const input = e.target

    const change = {
      [input.name] : {
        value: input.value,
        hasError: false,
        errMsg: ''
      }
    }

    if (input.name === "title" && input.value.length < 3) {
      change.title.hasError = true;
      change.title.errMsg = 'Your title is too short'
    }else if (input.name === "category" && input.value.length < 3) {
      change.category.hasError = true;
      change.category.errMsg = 'Your category is too short'
    }else if (input.name === "salary" && Number(input.value) < 1000) {
      change.salary.hasError = true;
      change.salary.errMsg = 'Your salary is too low'
    }else if (input.name === "description" && input.value.length < 10) {
      change.description.hasError = true;
      change.description.errMsg = 'Your description is too pale'
    }else if (input.name === "requirements" && input.value.length < 10) {
      change.requirements.hasError = true;
      change.requirements.errMsg = 'Your requirements is too low'
    }else if (input.name === "imageUrl" && input.value.length < 10) {
      change.imageUrl.hasError = true;
      change.imageUrl.errMsg = 'No URL is that short!'
    }

    setInputs(old => ({...old, ...change}))
  }

  return (
    <section id="edit">
      <div className={style.form}>
        <h2>Edit Offer</h2>
        <form className={style["edit-form"]} onSubmit={onCreateSubmit}>
        {inputs.title?.hasError && (
              <label className={style.errorLabel} htmlFor="job-title">
                {inputs.title?.errMsg}
              </label>
            )}
          <input 
            className={inputs.title?.hasError && style.errorInput}
            type="text"
            name="title"
            id="job-title"
            placeholder="Title" 
            value={inputs.title?.value}
            onBlur={onInputValidation}
            onChange={onInputChange}  
          />
          {inputs.imageUrl?.hasError && (
              <label className={style.errorLabel} htmlFor="job-logo">
                {inputs.imageUrl?.errMsg}
              </label>
            )}
          <input
            className={inputs.imageUrl?.hasError && style.errorInput}
            type="text"
            name="imageUrl"
            id="job-logo"
            placeholder="Company logo url"
            value={inputs.imageUrl?.value}
            onBlur={onInputValidation}
            onChange={onInputChange}
          />
          {inputs.category?.hasError && (
              <label className={style.errorLabel} htmlFor="job-category">
                {inputs.category?.errMsg}
              </label>
            )}
          <input
            className={inputs.category?.hasError && style.errorInput}
            type="text"
            name="category"
            id="job-category"
            placeholder="Category"
            value={inputs.category?.value}
            onBlur={onInputValidation}
            onChange={onInputChange}
          />
          {inputs.description?.hasError && (
              <label className={style.errorLabel} htmlFor="job-description">
                {inputs.description?.errMsg}
              </label>
            )}
          <textarea
            className={inputs.description?.hasError && style.errorInput}
            id="job-description"
            name="description"
            placeholder="Description"
            rows={4}
            cols={50}
            value={inputs.description?.value}
            onBlur={onInputValidation}
            onChange={onInputChange}
          />
          {inputs.requirements?.hasError && (
              <label className={style.errorLabel} htmlFor="job-requirements">
                {inputs.requirements?.errMsg}
              </label>
            )}
          <textarea
            className={inputs.requirements?.hasError && style.errorInput}
            id="job-requirements"
            name="requirements"
            placeholder="Requirements"
            rows={4}
            cols={50}
            value={(inputs.requirements?.value)?.split('*').join('\n')}
            onBlur={onInputValidation}
            onChange={onInputChange}
          />
          {inputs.salary?.hasError && (
              <label className={style.errorLabel} htmlFor="job-salary">
                {inputs.salary?.errMsg}
              </label>
            )}
          <input
            className={inputs.salary?.hasError && style.errorInput}
            type="text"
            name="salary"
            id="job-salary"
            placeholder="Salary"
            value={inputs.salary?.value}
            onBlur={onInputValidation}
            onChange={onInputChange}
          />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
  );
};