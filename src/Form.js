import  { useContext } from "react";
import Container from "./Container";
import { Context } from "./contexts/Context";

export default function Form() {
  const { title, body, handleTitle, handleBody, form, handleSubmit, selector, handleSelector } =
    useContext(Context);

  if (form) {
    return (
      <Container>
        <div className="mt-6">
          <form className='border rounded-md flex flex-col' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='text-center text-5xl'>Добавить новый пост</h1>
            <label className='text-4xl text-center py-6' htmlFor="title">Заголовок</label>
            <input className='bg-transparent w-1/3 border-b border-purple-300 mx-auto outline-none my-4' type="text" value={title} onChange={(e) => handleTitle(e)} />
            <label className='text-4xl text-center py-6' htmlFor="body">Ответ</label>
            <input className='bg-transparent w-1/3 border-b border-purple-300 mx-auto outline-none my-4' type="text" value={body} onChange={(e) => handleBody(e)} />
            <label className='text-4xl text-center py-6' htmlFor="category">выберите категорию</label>
            <select className="bg-transparent w-1/4 mx-auto text-3xl outline-none border-b border-purple-300" id="category" value={selector} onChange={e => handleSelector(e)}>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="react">react</option>
              <option value="next">next</option>
              <option value="ethers">ethers</option>
            </select>
            <input className="bg-yellow-300 text-slate-800 rounded-full px-6 py-3 text-3xl hover:underline w-1/4 my-6 mx-auto" type="submit" value="add" />
          </form>
        </div>
      </Container>
    );
  }
}
