import { Button, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-10 gap-8  overflow-hidden">
      <section className="bg-green-600 text-white p-6 lg:p-8 rounded w-full lg:w-[32rem]">
        <h1 className="text-2xl font-bold mb-4 text-center underline">
          Reach us
        </h1>
        <p className="mb-4">
          If you have any general or medical enquiry, feel free to contact us.
          Our doctors will respond as soon as possible.
        </p>
        <div className="mb-4">
          <h1 className="text-xl font-bold flex items-center mb-1">Address</h1>
          <p>Central plaza, Naaz center, Sambasiva peta, Guntur-522001</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold flex items-center mb-1">Phone</h1>
          <p>+91 9505544220</p>
        </div>
        <div>
          <h1 className="text-xl font-bold flex items-center mb-1">Email</h1>
          <p>andhraprimeh@gmail.com</p>
        </div>
      </section>

      <section className="w-full lg:w-2/3 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-4 underline text-center">
          Drop us a message
        </h1>
        <p className="mb-2">
          If you have any general or medical enquiry, feel free to contact us.
          Our doctors will respond as soon as possible.
        </p>
        <p className="mb-4 text-gray-600">
          Fields marked with an <span className="text-red-500">*</span> are
          required
        </p>
        <form className="space-y-4">
          <TextField
            size="small"
            label="Full Name"
            variant="outlined"
            type="text"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Phone"
            variant="outlined"
            type="text"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
          />
          <TextField
            size="small"
            label="Message"
            variant="outlined"
            type="text"
            multiline
            rows={5}
            fullWidth
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
