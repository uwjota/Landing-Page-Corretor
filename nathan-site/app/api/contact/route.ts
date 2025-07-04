import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { nome, telefone, tipo } = await request.json()

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Dados do formulário recebidos:', { nome, telefone, tipo })
      
      // Por enquanto, apenas simular sucesso para teste
      return NextResponse.json(
        { 
          success: true, 
          message: 'Formulário recebido! Configure o email para envio real.',
          data: { nome, telefone, tipo }
        },
        { status: 200 }
      )
    }

    // Configurar o transporter do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'corretormerodio@gmail.com',
      subject: `Novo contato do site - ${tipo}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            Novo Contato do Site
          </h2>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Informações do Cliente:</h3>
            
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Tipo de Interesse:</strong> ${tipo}</p>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 5px; font-size: 14px; color: #047857;">
            <strong>Data do contato:</strong> ${new Date().toLocaleString('pt-BR')}
          </div>
        </div>
      `
    }

    // Enviar o email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    )
  }
} 