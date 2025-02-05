import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ExampleForm = () => {
    const [state, handleSubmit] = useForm("mzzdgnow");

    if (state.succeeded) {
        return (
            <div className="form-success card">
                <p>Thank you for reaching out! <br /> I'll be reading your message as soon as possible</p>
                <button type="button" className="fs-button" onClick={() => window.location.reload()}>Refresh</button>
            </div>
        );
    }

    return (
        <form className="fs-form card" onSubmit={handleSubmit}>
            <div className="fs-field">
                <label className="fs-label" htmlFor="name">
                    Your Name
                </label>
                <input className="fs-input" id="name" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="email">
                    Email
                </label>
                <input className="fs-input" id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <p className="fs-description">
                    This will help me respond to your query via an email.
                </p>
            </div>
            <div className="fs-field">
                <label className="fs-label" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="fs-textarea"
                    id="message"
                    name="message"
                    required
                    rows={1}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = `${target.scrollHeight}px`;
                    }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <p className="fs-description">What would you like to discuss?</p>
            </div>
            <div className="fs-button-group">
                <button className="fs-button" type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ExampleForm;