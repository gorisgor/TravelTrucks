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
      bookingDate: Yup.string().required("Booking date is required"),
    }),
    onSubmit: (values) => {
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
        <div>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="bookingDate">Booking Date*</label>
          <input
            id="bookingDate"
            name="bookingDate"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bookingDate}
          />
          {formik.touched.bookingDate && formik.errors.bookingDate && (
            <p>{formik.errors.bookingDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="comment">Comment (optional)</label>
          <textarea
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
