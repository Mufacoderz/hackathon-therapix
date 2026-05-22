import CardDurasiHarga from "@/components/atoms/CardDurasiHarga";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    hargaList: {
        [key: number]: number;
    };
}

export default function CardDurasiHargaList({ name, hargaList, ...props }: Props) {
    return (
        <div {...props}>
            <CardDurasiHarga hargaList={hargaList} name={name} />
        </div>
    )
}