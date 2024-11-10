import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import css from "./BookForm.module.css";

export default function BookForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      bookingDate: Yup.date("dd.mm.yyyy").required("Booking date is required"),
    }),
    onSubmit: (values, actions) => {
      actions.resetForm();
      toast.success("Booking successful!");
    },
  });

  return (
    <div className={css.container}>
      <h4 className={css.title}>Book your campervan now</h4>
      <p className={css.subTitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <input
          className={css.input}
          id="name"
          name="name"
          type="text"
          placeholder="Name*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p>{formik.errors.name}</p>
        )}
        <input
          className={css.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <input
          className={css.input}
          id="bookingDate"
          name="bookingDate"
          type="text"
          placeholder="Booking date*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bookingDate}
        />
        {formik.touched.bookingDate && formik.errors.bookingDate && (
          <p>{"dd.mm.yyyy"}</p>
        )}
        <textarea
          className={css.comment}
          id="comment"
          name="comment"
          placeholder="Comment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        />

        <button className={css.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
