const addData = async () => {
    if (data.userName && data.email && data.password) {
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("tapNowUid", user.uid);
          // console.log(user.uid)
          update(ref(db, `User/${user.uid}`), {
            id: user.uid,
            name: data?.name,
            userName: data?.userName,
            email: data.email,
            bgImg: "",
            bio: "",
            job: "",
            colorCode: "#2F80ED",
            company: "",
            directMode: false,
            qrColor: "",
            qrLogo: "",
            phone: "",
            logoImg: "",
            leadForm: {
              Fname: true,
              company: true,
              email: true,
              job: true,
              note: true,
              phone: true,
            },
            // link:{
            //   title:"",
            //   value:"",
            //   Email:"",

            // },
            leadMode: false,
            location: "",
            formHeader: "",
            allowTeamLogin: true,
            loginAllow: true,
          }).then(() => {
            toast.success("New user created sucessfuly");
            navigate("/home");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          console.log(error.message);
          if (error.message === "Firebase: Error (auth/invalid-email).") {
            toast.error("Please enter valid email");
          } else if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            toast.error("Email already exits");
          } else if (
            error.message ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.error("Password must be at least 6 characters");
          }
          // ..
        });
      setdata({
        email: "",
        password: "",
        name: "",
        username: "",
      });
     
    } else {
      toast.error("Email , password and user name should not be empty");
    }
  };