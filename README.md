# React + Vite

`useFormStatus` is a React 19 hook that tells you **what is happening with the form while it is being submitted**.

### Imagine this

You fill out a form and click **Submit**.

Normally:

* You click **Submit**.
* The request takes 2–3 seconds.
* You don't know if the button was clicked.
* You might click it again.

With `useFormStatus`:

* React knows the form is submitting.
* You can show **"Submitting..."**.
* You can disable the button to prevent multiple clicks.

---

### What does it return?

The most commonly used value is:

```jsx
const { pending } = useFormStatus();
```

* `pending = false` → The form is **not** submitting.
* `pending = true` → The form **is** submitting.

---

### Example

```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
```

When you click the button:

```
Before click:
Submit

After click:
Submitting...
(Button becomes disabled)

After request finishes:
Submit
(Button is enabled again)
```

---

### Why use it?

Without `useFormStatus`:

```jsx
<button>Submit</button>
```

The user doesn't know if the form is processing.

With `useFormStatus`:

```jsx
<button disabled={pending}>
  {pending ? "Submitting..." : "Submit"}
</button>
```

The user gets clear feedback that the form is being submitted.

---

### Important rule

`useFormStatus` **must be used inside a component that is rendered within a `<form>`**.

```jsx
<form action={submitForm}>
  <SubmitButton />
</form>
```

It won't work correctly if you call it outside the form.

### In one sentence

**`useFormStatus` lets you know whether a form is currently submitting, so you can update the UI—for example, by showing "Submitting..." or disabling the submit button.**
