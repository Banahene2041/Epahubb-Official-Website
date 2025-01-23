import { useGlobalContext } from "../Context"

export const Bulb = () => {
  const { selectedColor } = useGlobalContext()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className='w-[3rem] h-[3rem] xl:w-[4rem] xl:h-[4rem]'
      style={{ color: selectedColor }}
      fill='currentColor'
    >
      <path d='M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z' />
    </svg>
  )
}

export const Shield = () => {
  const { selectedColor } = useGlobalContext()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className='w-[3rem] h-[3rem] xl:w-[4rem] xl:h-[4rem]'
      style={{ color: selectedColor }}
      fill='currentColor'
    >
      <path d='M12 0c-3.664 0-7.055 1.334-9 3v11.536c0 4.602 3.204 5.803 9 9.464 5.796-3.661 9-4.863 9-9.464v-11.536c-1.945-1.666-5.336-3-9-3zm-7 14.536v-2.536h7v-10h.007c2.632 0 5.264.832 6.993 1.991v8.009h-7v9.643c-5.342-3.297-7-4.078-7-7.107z' />
    </svg>
  )
}

export const Board = () => {
  const { selectedColor } = useGlobalContext()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className='w-[3rem] h-[3rem] xl:w-[4rem] xl:h-[4rem]'
      style={{ color: selectedColor }}
      fill='currentColor'
    >
      <path d='M11.786 7.892c-.261.195-.576.3-.901.3-.603 0-.905-.736-.481-1.16.231-.23.527-.378.851-.425.607-.087.875-.841.427-1.289-.447-.447-1.201-.18-1.289.429-.046.321-.195.62-.424.85-.427.427-1.161.123-1.161-.48 0-.327.105-.641.3-.902.37-.494.023-1.215-.608-1.215s-.978.721-.608 1.214c.195.26.3.577.3.901 0 .604-.733.908-1.16.481-.23-.231-.378-.527-.425-.85-.088-.608-.841-.875-1.289-.428-.447.448-.18 1.201.429 1.289.321.046.62.195.85.425.426.427.123 1.161-.481 1.161-.326 0-.64-.105-.901-.3-.494-.371-1.215-.024-1.215.607s.721.978 1.214.608c.26-.195.577-.3.901-.3.604 0 .908.733.481 1.16-.231.23-.527.378-.85.425-.608.087-.876.841-.429 1.289.448.447 1.201.18 1.289-.429.046-.321.195-.62.425-.85.427-.426 1.161-.123 1.161.48 0 .327-.105.641-.3.902-.369.492-.025 1.215.608 1.215.629 0 .979-.72.608-1.215-.195-.258-.3-.573-.3-.896 0-.605.733-.912 1.161-.485.231.231.378.527.424.85.088.608.841.876 1.289.429.447-.447.181-1.203-.43-1.289-.319-.045-.616-.193-.845-.422-.429-.428-.126-1.163.478-1.163.325 0 .639.105.901.3.491.368 1.214.024 1.214-.609 0-.632-.722-.977-1.214-.608zm-4.022 1.61c-.206 0-.372-.167-.372-.372s.166-.371.372-.371c.205 0 .371.167.371.371 0 .206-.167.372-.371.372zm.472-1.178c-.321 0-.582-.261-.582-.582 0-.322.261-.583.582-.583.322 0 .583.26.583.583 0 .321-.261.582-.583.582zm1.098 1.113c-.272 0-.494-.221-.494-.493s.221-.493.494-.493.493.221.493.493-.22.493-.493.493zm11.835 10.317c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414-2.831-2.832zm-4.169.246c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4.89 2h-7.11l2.599-3h2.696c.345 1.152.976 2.18 1.815 3zm-2.11-5h-10v-17h22v12.11c-.574-.586-1.251-1.068-2-1.425v-8.685h-18v13h8.295c-.19.634-.295 1.305-.295 2z' />
    </svg>
  )
}

export const Graph = () => {
  const { selectedColor } = useGlobalContext()

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className='w-[3rem] h-[3rem] xl:w-[4rem] xl:h-[4rem]'
      style={{ color: selectedColor }}
      fill='currentColor'
    >
      <path d='M5 20v2h-2v-2h2zm2-2h-6v6h6v-6zm6-1v5h-2v-5h2zm2-2h-6v9h6v-9zm6-2v9h-2v-9h2zm2-2h-6v13h6v-13zm0-11l-6 1.221 1.716 1.708-6.85 6.733-3.001-3.002-7.841 7.797 1.41 1.418 6.427-6.39 2.991 2.993 8.28-8.137 1.667 1.66 1.201-6.001z' />
    </svg>
  )
}

export const monitor = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      className='w-6 h-6 text-[#C64A4A]'
      fill='currentColor'
    >
      <path d='M21.169 19.754c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414-2.831-2.832zm-4.169.246c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4.89 2h-7.11l2.599-3h2.696c.345 1.152.976 2.18 1.815 3zm-2.11-5h-10v-17h22v12.11c-.574-.586-1.251-1.068-2-1.425v-8.685h-18v13h8.295c-.19.634-.295 1.305-.295 2zm-2.131-4.372l.945-5.759.965 4.145c.096.425.686.473.847.063l.895-2.328.479.974c.08.169.164.277.438.277h1.208v-.877h-.921l-.836-1.624c-.156-.364-.677-.356-.82.014l-.741 1.895-1.144-5.062c-.052-.232-.242-.346-.43-.346-.2 0-.4.127-.44.373l-.948 5.847-.969-3.6c-.109-.43-.715-.455-.853-.029l-.721 2.545h-.823v.864h1.172c.16 0 .334-.13.38-.284l.406-1.257 1.043 4.206c.117.468.791.437.868-.037z' />
    </svg>
  )
}


export const HamburgerDark = () => {
  return (
    <svg
      clip-rule='evenodd'
      fill-rule='evenodd'
      stroke-linejoin='round'
      stroke-miterlimit='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[2.3rem] h-[2.3rem] text-black'
      fill='currentColor'
    >
      <path
        d='m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z'
        fill-rule='nonzero'
      />
    </svg>
  )
}

export const HamburgerWhite = () => {
  return (
    <svg
      clip-rule='evenodd'
      fill-rule='evenodd'
      stroke-linejoin='round'
      stroke-miterlimit='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[2.3rem] h-[2.3rem] text-white'
      fill='currentColor'
    >
      <path
        d='m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z'
        fill-rule='nonzero'
      />
    </svg>
  )
}

export const ClosesHamburgerDark = () => {
  return (
    <svg
      clip-rule='evenodd'
      fill-rule='evenodd'
      stroke-linejoin='round'
      stroke-miterlimit='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[2.3rem] h-[2.3rem] text-[#b1b7cd]'
      fill='currentColor'
    >
      <path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
    </svg>
  )
}

export const ClosesHamburgerWhite = () => {
  return (
    <svg
      clip-rule='evenodd'
      fill-rule='evenodd'
      stroke-linejoin='round'
      stroke-miterlimit='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='w-[2.3rem] h-[2.3rem] text-[#a9a9a9]'
      fill='currentColor'
    >
      <path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
    </svg>
  )
}