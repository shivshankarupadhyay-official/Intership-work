document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------
       CURRENT YEAR
    -------------------------------- */

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* --------------------------------
       MOBILE NAVIGATION
    -------------------------------- */

    const toggle = document.querySelector(".menu-toggle");

    const nav = document.querySelector("#site-nav");


    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            const isOpen =
                toggle.getAttribute("aria-expanded") === "true";


            toggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );


            nav.classList.toggle(
                "open",
                !isOpen
            );


            toggle.textContent =
                isOpen
                    ? "Menu"
                    : "Close";

        });


        /* Close navigation after clicking a link */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggle.textContent = "Menu";

            });

        });

    }


    /* --------------------------------
       CONTACT FORM VALIDATION
    -------------------------------- */

    const form =
        document.querySelector("#contact-form");


    if (form) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const fields = [

                    [
                        "name",
                        "Please enter your name."
                    ],

                    [
                        "email",
                        "Please enter a valid email address."
                    ],

                    [
                        "message",
                        "Please enter a message."
                    ]

                ];


                let valid = true;


                fields.forEach(
                    ([id, message]) => {

                        const input =
                            document.getElementById(id);

                        const error =
                            document.getElementById(
                                `${id}-error`
                            );


                        let errorMessage = "";


                        /* Required field */

                        if (!input.value.trim()) {

                            errorMessage =
                                message;

                        }


                        /* Email validation */

                        else if (
                            id === "email" &&
                            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                .test(
                                    input.value.trim()
                                )
                        ) {

                            errorMessage =
                                message;

                        }


                        error.textContent =
                            errorMessage;


                        input.setAttribute(
                            "aria-invalid",
                            errorMessage
                                ? "true"
                                : "false"
                        );


                        if (errorMessage) {
                            valid = false;
                        }

                    }
                );


                const status =
                    document.querySelector(
                        "#form-status"
                    );


                if (!valid) {

                    status.textContent =
                        "Please correct the highlighted fields.";

                    return;
                }


                status.textContent =
                    "Thanks! Your message has been validated locally. " +
                    "Connect the form to a backend or form service " +
                    "to receive submissions.";


                form.reset();


                form.querySelectorAll(
                    "[aria-invalid]"
                ).forEach(input => {

                    input.setAttribute(
                        "aria-invalid",
                        "false"
                    );

                });

            }
        );

    }

});