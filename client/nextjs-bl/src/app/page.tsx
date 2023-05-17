export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* esquerda */}
      <div></div>
      {/* direita */}
      <div className=" flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed">
            Você ainda não registrou nehuma lembrança, comece a
            <a href="/">criar agora</a>
          </p>
        </div>
      </div>
    </main>
  )
}
