const Contact = () => {
  return (
    <div className="custom-container flex flex-col gap-16 xl:gap-24 text-2xl md:text-5xl font-medium">
      <div className="pt-20 flex flex-col xl:flex-row xl:flex-wrap gap-y-2">
        <a href="mailto:njalbuero@gmail.com" className="xl:w-1/2">
          <span>njalbuero@gmail.com</span>
        </a>
        <a href="tel:+639156435065">
          <span>+639156435065</span>
        </a>
      </div>

      <div className="flex flex-col xl:flex-row xl:flex-wrap gap-y-16">
        <div className="flex flex-col gap-2 xl:w-1/2">
          <a href="https://www.linkedin.com/in/nhielsan-albuero/">
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/njalbuero">
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex flex-col gap-2">
          {/* address*/}
          <span>Makati City,</span>
          <span>Metro Manila,</span>
          <span>Philippines</span>
        </div>
      </div>

      <div className="mt-auto text-sm text-gray-500">
        <p>Made with ❤️ by Nhielsan Albuero</p>
      </div>
    </div>
  );
};

export default Contact;
