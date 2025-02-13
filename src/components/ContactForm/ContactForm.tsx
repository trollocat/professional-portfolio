import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ExampleForm = () => {
    const [state, handleSubmit] = useForm("mzzdgnow");
    const { t } = useTranslation("contact");

    if (state.succeeded) {
        return (
            <div className="form-success card">
                <p>
                    {t('contact.form.success.message')}
                </p>
                <button type="button" className="button" onClick={() => window.location.reload()}>
                    {t('contact.form.success.button')}
                </button>
            </div>
        );
    }

    return (
        <form className="form card" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="name">
                    {t('contact.form.name.label')}
                </label>
                <input className="input" id="name" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                {t('contact.form.name.description') && <p className="description">{t('contact.form.name.description')}</p>}
            </div>
            <div className="field">
                <label className="label" htmlFor="email">
                    {t('contact.form.email.label')}
                </label>
                <input className="input" id="email" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                {t('contact.form.email.description') && <p className="description">{t('contact.form.email.description')}</p>}
            </div>
            <div className="field">
                <label className="label" htmlFor="message">
                    {t('contact.form.message.label')}
                </label>
                <textarea
                    className="textarea"
                    id="message"
                    name="message"
                    required
                    rows={3}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = `${target.scrollHeight}px`;
                    }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                {t('contact.form.message.description') && <p className="description">{t('contact.form.message.description')}</p>}
            </div>
            <div className="button-group">
                <button className="button" type="submit" disabled={state.submitting}>
                    {t('contact.form.submit.text')}
                </button>
            </div>
        </form>
    );
}

export default ExampleForm;