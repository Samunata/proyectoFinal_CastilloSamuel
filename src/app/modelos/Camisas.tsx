export class Camisas{
    public Camisass: number;
    public marcaCamisas: string;
    public colorCamisas: string;
    public TallaCamisas: string;
    public imagenCamisas: string;
    public imagenCamisasBase64: string;

    constructor(copd: number, marc: string, colo: string, tall: string, imag: string, base: string){
        this.Camisass = copd;
        this.marcaCamisas = marc;
        this.colorCamisas = colo;
        this.TallaCamisas = tall;
        this.imagenCamisas = imag;
        this.imagenCamisasBase64 = base;
    }
}