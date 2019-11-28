export interface nutricion{
    rut:number
    nombres: number
    paterno:string
    materno:string
    id_ficha_nutri:number
    n_contr_nutr:number
    fecha_eval_ing:Date
    fecha_eval_egr:Date
    kg_musc_ing:number
    kg_musc_egr:number
    kg_grasa_ing:number
    kg_grasa_egr:number
    porc_mg_ing:number
    porc_mg_egr:number
    nivel_gv_egr:number
    indice_ing:number
    p_cintura_ing:number
    p_cintura_egr:number
    peso_ing:number
    peso_egr:number
    talla_ing:number
    talla_egr:number
    imc_ing:number
    imc_egr:number
    estado_nutr_ing:string
    estado_nutr_egr:string
    soporte_nutr_egr:string
    morbidos:string
    p_cardio:string
}
export class nutricion{
    rut:number
    nombres: number
    paterno:string
    materno:string
    id_ficha_nutri:number
    n_contr_nutr:number
    fecha_eval_ing:Date
    fecha_eval_egr:Date
    kg_musc_ing:number
    kg_musc_egr:number
    kg_grasa_ing:number
    kg_grasa_egr:number
    porc_mg_ing:number
    porc_mg_egr:number
    nivel_gv_egr:number
    indice_ing:number
    p_cintura_ing:number
    p_cintura_egr:number
    peso_ing:number
    peso_egr:number
    talla_ing:number
    talla_egr:number
    imc_ing:number
    imc_egr:number
    estado_nutr_ing:string
    estado_nutr_egr:string
    soporte_nutr_egr:string
    morbidos:string
    p_cardio:string

    constructor(datos?: nutricion){
        if(datos != null ){
            this.nombres=datos.nombres
            this.paterno=datos.paterno
            this.materno=datos.materno
            this.id_ficha_nutri=datos.id_ficha_nutri
            this.n_contr_nutr=datos.n_contr_nutr
            this.fecha_eval_ing=datos.fecha_eval_ing
            this.fecha_eval_egr=datos.fecha_eval_egr
            this.kg_musc_ing=datos.kg_musc_ing
            this.kg_musc_egr=datos.kg_musc_egr
            this.kg_grasa_ing=datos.kg_grasa_ing
            this.kg_grasa_egr=datos.kg_grasa_egr
            this.porc_mg_ing=datos.porc_mg_ing
            this.porc_mg_egr=datos.porc_mg_egr
            this.nivel_gv_egr=datos.nivel_gv_egr
            this.indice_ing= datos.indice_ing
            this.p_cintura_ing=datos.p_cintura_ing
            this.p_cintura_egr=datos.p_cintura_egr
            this.peso_ing=datos.peso_ing
            this.peso_egr=datos.peso_egr
            this.talla_ing=datos.talla_ing
            this.talla_egr=datos.talla_egr
            this.imc_ing=datos.imc_ing
            this.imc_egr=datos.imc_egr
            this.estado_nutr_ing=datos.estado_nutr_ing
            this.estado_nutr_egr=datos.estado_nutr_egr
            this.soporte_nutr_egr=datos.soporte_nutr_egr
            this.morbidos=datos.morbidos
            this.p_cardio=datos.p_cardio
            return

        }
        
            this.nombres=this.nombres
            this.paterno=this.paterno
            this.materno=this.materno
            this.id_ficha_nutri=this.id_ficha_nutri
            this.n_contr_nutr=this.n_contr_nutr
            this.fecha_eval_ing=this.fecha_eval_ing
            this.fecha_eval_egr=this.fecha_eval_egr
            this.kg_musc_ing=this.kg_musc_ing
            this.kg_musc_egr=this.kg_musc_egr
            this.kg_grasa_ing=this.kg_grasa_ing
            this.kg_grasa_egr=this.kg_grasa_egr
            this.porc_mg_ing=this.porc_mg_ing
            this.porc_mg_egr=this.porc_mg_egr
            this.nivel_gv_egr=this.nivel_gv_egr
            this.indice_ing= this.indice_ing
            this.p_cintura_ing=this.p_cintura_ing
            this.p_cintura_egr=this.p_cintura_egr
            this.peso_ing=this.peso_ing
            this.peso_egr=this.peso_egr
            this.talla_ing=this.talla_ing
            this.talla_egr=this.talla_egr
            this.imc_ing=this.imc_ing
            this.imc_egr=this.imc_egr
            this.estado_nutr_ing=this.estado_nutr_ing
            this.estado_nutr_egr=this.estado_nutr_egr
            this.soporte_nutr_egr=this.soporte_nutr_egr
            this.morbidos=this.morbidos
            this.p_cardio=this.p_cardio
            return
    }
}

export interface psicologia{
    rut:number
    nombres:string
    paterno:string
    materno:string
    sf_fechaa_ing:Date
    sf_fechaa_egr:Date
    sf_funcion_ing:number
    sf_rol_ing:number 
    sf_dolor_ing:number 
    sf_salid_egr:number 
    sf_vital_ing:number 
    sf_vital_egr:number 
    sf_funcionsoc_egr:number 
    sf_rolemo_ing:number 
    sf_rolemo_egr:number 
    sf_saludmen_ing:number 
    sf_salidmen_egr:number 
    had_ansie_ing:number 
    had_ansie_egr:number 
    had_depre_ing:number 
    had_depre_egr:number 
    had_suba_ing:number 
    had_suba_egr:number 
    had_subd_ing:number 
    had_subd_egr:number 
    created_at: Date
    updated_at: Date
}
export class psicologia{
    rut:number
    nombres:string
    paterno:string
    materno:string
    sf_fechaa_ing:Date
    sf_fechaa_egr:Date
    sf_funcion_ing:number
    sf_rol_ing:number 
    sf_dolor_ing:number 
    sf_salid_egr:number 
    sf_vital_ing:number 
    sf_vital_egr:number 
    sf_funcionsoc_egr:number 
    sf_rolemo_ing:number 
    sf_rolemo_egr:number 
    sf_saludmen_ing:number 
    sf_salidmen_egr:number 
    had_ansie_ing:number 
    had_ansie_egr:number 
    had_depre_ing:number 
    had_depre_egr:number 
    had_suba_ing:number 
    had_suba_egr:number 
    had_subd_ing:number 
    had_subd_egr:number 
    created_at: Date
    updated_at: Date

    constructor(datos?: psicologia){
        if(datos != null ){
            this.rut = datos.rut
            this.nombres=datos.nombres
            this.paterno=datos.paterno
            this.materno=datos.materno
            this.sf_fechaa_ing=datos.sf_fechaa_ing
            this.sf_fechaa_egr=datos.sf_fechaa_egr
            this.sf_funcion_ing=datos.sf_funcion_ing
            this.sf_rol_ing = datos.sf_rol_ing
            this.sf_dolor_ing=datos.sf_dolor_ing
            this.sf_salid_egr=datos.sf_salid_egr
            this.sf_vital_ing =datos.sf_vital_ing
            this.sf_vital_egr= datos.sf_vital_egr
            this.sf_funcionsoc_egr=datos.sf_funcionsoc_egr
            this.sf_rolemo_ing=datos.sf_rolemo_ing
            this.sf_rolemo_egr=datos.sf_rolemo_egr
            this.sf_saludmen_ing = datos.sf_saludmen_ing
            this.sf_salidmen_egr= datos.sf_salidmen_egr
            this.had_ansie_ing =datos.had_ansie_ing
            this.had_ansie_egr=datos.had_ansie_egr
            this.had_depre_ing=datos.had_depre_ing
            this.had_depre_egr =datos.had_depre_egr
            this.had_suba_ing= datos.had_suba_ing
            this.had_suba_egr=datos.had_suba_egr
            this.had_subd_ing=datos.had_subd_ing
            this.had_subd_egr=datos.had_subd_egr
            this.created_at= datos.created_at
            this.updated_at=datos.updated_at
            return
    } 
    this.rut=this.rut
    this.nombres=this.nombres
    this.paterno=this.paterno
    this.materno=this.materno
    this.sf_fechaa_ing=this.sf_fechaa_ing
    this.sf_fechaa_egr=this.sf_fechaa_egr
    this.sf_funcion_ing=this.sf_funcion_ing
    this.sf_rol_ing = this.sf_rol_ing
    this.sf_dolor_ing=this.sf_dolor_ing
    this.sf_salid_egr=this.sf_salid_egr
    this.sf_vital_ing =this.sf_vital_ing
    this.sf_vital_egr= this.sf_vital_egr
    this.sf_funcionsoc_egr=this.sf_funcionsoc_egr
    this.sf_rolemo_ing=this.sf_rolemo_ing
    this.sf_rolemo_egr=this.sf_rolemo_egr
    this.sf_saludmen_ing = this.sf_saludmen_ing
    this.sf_salidmen_egr= this.sf_salidmen_egr
    this.had_ansie_ing =this.had_ansie_ing
    this.had_ansie_egr=this.had_ansie_egr
    this.had_depre_ing=this.had_depre_ing
    this.had_depre_egr =this.had_depre_egr
    this.had_suba_ing= this.had_suba_ing
    this.had_suba_egr=this.had_suba_egr
    this.had_subd_ing=this.had_subd_ing
    this.had_subd_egr=this.had_subd_egr
    this.created_at= this.created_at
    this.updated_at=this.updated_at
    return
    }
}

export interface kine{
    id: number
    rut: number
    nombres: string
    paterno: string
    materno: string
    riesgo: string
    ergo_fecha_ing: Date
    ergo_fecha_egr: Date
    ergo_vol_ing: number 
    ergo_voml_ing: number
    ergo_voml_egr: number
    ergo_fcmax_egr: number
    ergo_pulso_ing: number
    ergo_pulso_egr: number
    ergo_ve_ing: number
    ergo_ve_egr: number
    ergo_mets_ing: number
    ergo_mets_egr: number
    created_at: Date
    updated_at: Date
} 

export interface datosmedicos{

id: number
rut: number
nombres: string
paterno: string
materno: string
riesgo: string
ergo_fecha_ing: Date
ergo_fecha_egr: Date
ergo_vol_ing: number 
ergo_voml_ing: number
ergo_voml_egr: number
ergo_fcmax_egr: number
ergo_pulso_ing: number
ergo_pulso_egr: number
ergo_ve_ing: number
ergo_ve_egr: number
ergo_mets_ing: number
ergo_mets_egr: number
created_at: Date
updated_at: Date
}

export class datosmedicos{

id: number
rut: number
nombres: string
paterno: string
materno: string
riesgo: string
ergo_fecha_ing: Date
ergo_fecha_egr: Date
ergo_vol_ing: number 
ergo_voml_ing: number
ergo_voml_egr: number
ergo_fcmax_egr: number
ergo_pulso_ing: number
ergo_pulso_egr: number
ergo_ve_ing: number
ergo_ve_egr: number
ergo_mets_ing: number
ergo_mets_egr: number
created_at: Date
updated_at: Date


constructor(datos?: datosmedicos){
    if(datos != null ){
        this.id = datos.id;
        this.rut = datos.rut;
        this.nombres = datos.nombres;
        this.paterno = datos.paterno;
        this.materno = datos.materno;
        this.riesgo = datos.riesgo;
        this.ergo_fecha_ing = datos.ergo_fecha_ing;
        this.ergo_fecha_egr = datos.ergo_fecha_egr;
        this.ergo_vol_ing = datos.ergo_vol_ing;
        this.ergo_voml_ing = datos.ergo_voml_ing;
        this.ergo_voml_egr = datos.ergo_voml_egr
        this.ergo_fcmax_egr = datos.ergo_fcmax_egr
        this.ergo_pulso_ing = datos.ergo_pulso_ing
        this.ergo_pulso_egr = datos.ergo_pulso_egr
        this.ergo_ve_ing = datos.ergo_ve_ing
        this.ergo_ve_egr = datos.ergo_ve_egr
        this.ergo_mets_ing = datos.ergo_mets_ing
        this.ergo_mets_egr = datos.ergo_mets_egr;
        this.created_at = datos.created_at;
        this.updated_at = datos.updated_at;
        return 
    }
        this.id = this.id;
        this.rut = this.rut;
        this.nombres = this.nombres;
        this.paterno = this.paterno;
        this.materno = this.materno;
        this.riesgo = this.riesgo;
        this.ergo_fecha_ing = this.ergo_fecha_ing;
        this.ergo_fecha_egr = this.ergo_fecha_egr;
        this.ergo_vol_ing = this.ergo_vol_ing;
        this.ergo_voml_ing = this.ergo_voml_ing;
        this.ergo_voml_egr = this.ergo_voml_egr;
        this.ergo_fcmax_egr = this.ergo_fcmax_egr;
        this.ergo_pulso_ing = this.ergo_pulso_ing;
        this.ergo_pulso_egr = this.ergo_pulso_egr;
        this.ergo_ve_ing = this.ergo_ve_ing;
        this.ergo_ve_egr = this.ergo_ve_egr;
        this.ergo_mets_ing = this.ergo_mets_ing;
        this.ergo_mets_egr = this.ergo_mets_egr;
        this.created_at = this.created_at;
        this.updated_at = this.updated_at;
    }
}


export interface interconsulta{
 nombre_medico : string
 nombre_paciente :string
 rut_paciente:number
 genero:string
 peso_paciente :  number
 altura_paciente : number
 presion_cardiaca : number
 observaciones_medicas:string
 fecha_atencion:Date

}

export class interconsulta{
 id: number
 nombre_medico : string
 nombre_paciente :string
 rut_paciente:number
 genero:string
 peso_paciente :  number
 altura_paciente : number
 presion_cardiaca : number
 observaciones_medicas:string
 fecha_atencion:Date

 constructor(datos?: interconsulta){
         if(datos != null ){
             this.nombre_medico=datos.nombre_medico;
             this.nombre_paciente=datos.nombre_paciente;
             this.rut_paciente=datos.rut_paciente;
             this.genero=datos.genero;
             this.peso_paciente=datos.peso_paciente;
             this.altura_paciente=datos.altura_paciente;
             this.presion_cardiaca=datos.presion_cardiaca;
             this.observaciones_medicas=datos.observaciones_medicas;
             this.fecha_atencion=datos.fecha_atencion;
             return
         }          
            this.nombre_medico=this.nombre_medico;
            this.nombre_paciente=this.nombre_paciente;
            this.rut_paciente=this.rut_paciente;
            this.genero=this.genero;
            this.peso_paciente=this.peso_paciente;
            this.altura_paciente=this.altura_paciente;
            this.presion_cardiaca=this.presion_cardiaca;
            this.observaciones_medicas=this.observaciones_medicas;
            this.fecha_atencion=this.fecha_atencion;
 }

}


   export class almacen{
    id_stora : number
    
    constructor(datos?:almacen){
        if(datos != null  ){
            this.id_stora=datos.id_stora;
            return
        }
        this.id_stora=this.id_stora;
    }
   }

export class codigo{
    id_codigo : number
    
    constructor(datos?:codigo){
        if(datos != null  ){
            this.id_codigo=datos.id_codigo;
            return
        }
        this.id_codigo=this.id_codigo;
    }
   }
   