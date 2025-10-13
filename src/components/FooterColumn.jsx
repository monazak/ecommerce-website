function FooterColumn({ title, children, logo }) {
  return (
    <div  className={`flex flex-col p-6 pl-0  `}>
      {logo && <h1 className="text-2xl font-bold mb-2">{logo}</h1>}
      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

export default FooterColumn;