     const colorPicker = document.getElementById("colorPicker");
        const colorValue = document.getElementById("colorValue");
        const copyBtn = document.getElementById("copyBtn");
        const message = document.getElementById("message");

        // Set initial color
        document.body.style.backgroundColor = colorPicker.value;
        colorValue.textContent = colorPicker.value;

        // Change background and show color code when color input is clicked/changed
        colorPicker.addEventListener("input", () => {
            document.body.style.backgroundColor = colorPicker.value;
            colorValue.textContent = colorPicker.value;
            message.textContent = "";
        });

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(colorValue.textContent).then(() => {
                message.textContent = "Copied!";
                setTimeout(() => message.textContent = "", 1200);
            });
        });