import useInput from "../hooks/use-input";

const NewMeetupForm = (props) => {
  const {
    value: meetupTitle,
    valueIsCorrect: meetupTitleIsCorrect,
    error: meetupTitleHasError,
    changeHandler: meetupTitleChangeHandler,
    blurHandler: meetupTitleBlurHandler,
  } = useInput((name) => name.trim().length > 5);

  const {
    value: meetupImage,
    valueIsCorrect: meetupImageIsCorrect,
    error: meetupImageHasError,
    changeHandler: meetupImageChangeHandler,
    blurHandler: meetupImageBlurHandler,
  } = useInput((url) =>
    url
      .toLowerCase()
      .match(
        /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
      )
  );

  const {
    value: meetupAddress,
    valueIsCorrect: meetupAddressIsCorrect,
    error: meetupAddressHasError,
    changeHandler: meetupAddressChangeHandler,
    blurHandler: meetupAddressBlurHandler,
  } = useInput((address) => address.trim().length > 5);

  const {
    value: description,
    valueIsCorrect: descriptionIsCorrect,
    error: descriptionHasError,
    changeHandler: descriptionChangeHandler,
    blurHandler: descriptionBlurHandler,
  } = useInput((address) => address.trim().length > 5);

  let formIsValid = false;

  if (
    meetupTitleIsCorrect &&
    meetupImageIsCorrect &&
    meetupAddressIsCorrect &&
    descriptionIsCorrect
  )
    formIsValid = true;

  const meetupData = {
    title: meetupTitle,
    image: meetupImage,
    address: meetupAddress,
    description: description,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddMeetup(meetupData);
  };

  const inputClassName = {
    meetupTitle: meetupTitleHasError ? "input-error" : "",
    meetupImage: meetupImageHasError ? "input-error" : "",
    meetupAddress: meetupAddressHasError ? "input-error" : "",
    description: descriptionHasError ? "input-error" : "",
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form__item-container">
        <label htmlFor="title">Meetup Title</label>
        <input
          onChange={meetupTitleChangeHandler}
          onBlur={meetupTitleBlurHandler}
          value={meetupTitle}
          type="text"
          id="title"
          className={inputClassName.meetupTitle}
        ></input>
        {meetupTitleHasError && <p className="input-error-message">Error</p>}
      </div>

      <div className="form__item-container">
        <label htmlFor="image-url">Meetup Image URL</label>
        <input
          onChange={meetupImageChangeHandler}
          onBlur={meetupImageBlurHandler}
          value={meetupImage}
          className={inputClassName.meetupImage}
          type="url"
          id="image-url"
        ></input>
        {meetupImageHasError && <p className="input-error-message">Error</p>}
      </div>

      <div className="form__item-container">
        <label htmlFor="address">Meetup Address</label>
        <input
          onChange={meetupAddressChangeHandler}
          onBlur={meetupAddressBlurHandler}
          value={meetupAddress}
          className={inputClassName.meetupAddress}
          type="text"
          id="address"
        ></input>
        {meetupAddressHasError && <p className="input-error-message">Error</p>}
      </div>

      <div className="form__item-container">
        <label htmlFor="description">Meetup Description</label>
        <textarea
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
          value={description}
          className={inputClassName.description}
          type="text"
          id="description"
        ></textarea>
        {descriptionHasError && <p className="input-error-message">Error</p>}
      </div>
      <button disabled={!formIsValid} type="submit">
        Add Meetup
      </button>
    </form>
  );
};

export default NewMeetupForm;
