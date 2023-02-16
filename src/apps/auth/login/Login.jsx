import { useForm } from "react-hook-form";
import { Components } from "../../../components";

import cls from "../../../assets/styles/login/Login.module.scss";
import Logo from "../../../assets/images/logo/yXM3FgMdVNX.png";



export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { arrors, isValid},
        setError
    } = useForm();

    const onSubmit = (data) => {

    }

  return (
    <div>
      <Components.Container>
        <section className={cls.login_page}>
          <div className={cls.login_page_card}>
              <Components.Image src={Logo}/>
    
          </div>
        </section>
      </Components.Container>
    </div>
  )
};
