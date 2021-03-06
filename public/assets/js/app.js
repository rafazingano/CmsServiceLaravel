
$(document).ready(function(){
	//click das abas do formulario de cadastro
	$('.menu #menu-1, .menu-mobile #menu-1').on('click', function(){
		$('.formulario .menu ul li, .formulario .menu-mobile ul li').removeClass('active'); 
		$(this).addClass('active');
		$('.div-form').css('display', 'none');
		$('.form-dados-pessoais').fadeIn();
	});
	$('.menu #menu-2, .menu-mobile #menu-2, #proxima-etapa').on('click', function(){
		$('.formulario .menu ul li, .formulario .menu-mobile ul li').removeClass('active'); 
		$('#menu-2').addClass('active');
		$('.div-form').css('display', 'none');
		if($('input[name="service_provider"]:checked').val() == 'y'){
			$('.form-localizacao').fadeIn();
			$('.form-localizacao-prestador').fadeIn();
			$('.form-localizacao-cotar').fadeOut();
                        $('#proxima-etapa-3').css('display','inline-block');
                        $('#salvar').css('display','none');
		}
		else if($('input[name="service_provider"]:checked').val() == 'n'){
			$('.form-localizacao').fadeIn();
			$('.form-localizacao-cotar').fadeIn();
			$('.form-localizacao-prestador').fadeOut(1);
                        $('#proxima-etapa-3').css('display','none');
                        $('#salvar').css('display','inline-block');
		}
	});
	$('.menu #menu-3, .menu-mobile #menu-3, #proxima-etapa-3').on('click', function(){
		$('.formulario .menu ul li, .formulario .menu-mobile ul li').removeClass('active'); 
		$("#menu-3").addClass('active');
		$('.div-form').css('display', 'none');
		$('.form-prestador').fadeIn();
	});

	$('input[value="y"]').on('click', function(){
		$('.menu #menu-3, .menu-mobile #menu-3').css('display', 'flex');
		$('#proxima-etapa-prestador').css('display', 'block');
	});
	$('input[value="n"]').on('click', function(){
		$('#menu-3').css('display', 'none');
		$('#salvar').css('display', 'block');
	});

	$('.troca-perfil').on('click', function(){
		if($('.troca-perfil').val() == 'prestador'){
			if(window.location.href == 'file:///C:/xampp/htdocs/koote--/perfil-solicitante.html'){
				window.location.href = 'file:///C:/xampp/htdocs/koote--/perfil-prestador.html';
			}
		}
		if($('.troca-perfil').val() == 'solicitante'){
			if(window.location == 'file:///C:/xampp/htdocs/koote--/perfil-prestador.html'){
				window.location.href = 'file:///C:/xampp/htdocs/koote--/perfil-solicitante.html';
			}
		}
	});

	$('#radio1').on('click', function(){
		$('.local-new').fadeOut();
		$('.div-cpf-cnpj').fadeIn(500);
	});
	$('#radio2').on('click', function(){
		$('.local-new').fadeIn();
		$('.div-cpf-cnpj').fadeOut(500);
	});
	
	

	//click das abas 
	$('#aba-old').on('click', function(){
		$('.perfil .conteudo .aba').removeClass('active'); 
		$(this).addClass('active');
		$('.formulario-new').hide(400);
		$('.solicitacoes').show(400);
	});
	$('#aba-new').on('click', function(){
		$('.perfil .conteudo .aba').removeClass('active'); 
		$(this).addClass('active');
		$('.solicitacoes').hide(400);
		$('.formulario-new').show(400);
	});
	$('#aba-apr').on('click', function(){
		$('.perfil .conteudo .aba').removeClass('active'); 
		$(this).addClass('active');
		$('.relacionados').hide(400);
		$('.aprovados-pendentes').show(400);
	});
	$('#aba-rel').on('click', function(){
		$('.perfil .conteudo .aba').removeClass('active'); 
		$(this).addClass('active');
		$('.aprovados-pendentes').hide(400);
		$('.relacionados').show(400);
	});


	if ($('#radio1:checked').val() == 'y'){
		$('#menu-3').css('display', 'flex');
	}

	$('.aba-conexao, .aba-mobile').on('click', function(){
		if ($(window).width() <  992){
			if ($('.perfil .conexao').css('left') == '0px'){
				$('.perfil .conexao').removeClass('active');
			}else {
				$('.perfil .conexao').addClass('active');
			}	
		}
	});

	//click das conexoes no mobile
	$('.x').on('click', function(){
		$('.perfil .conexao').removeClass('active');	
	});

	//add tags no input
	$('.mais').click(function(){
		var concat = $('#state option:selected').text() + " - " + $('#city option:selected').text() + " - " + $('#neighborhood option:selected').text();
	    $('.label-teste').tagsinput('add', concat);
	});
	$('.mais-tag').click(function(){
		var concat = $('#tag').val();
	    $('.label-tag').tagsinput('add', concat);
	});

	//estilizar o input radio
	$( "#radioset" ).buttonset();
	$( "#radioset1" ).buttonset();

	//estilizar o input file
	$('.procura-arq').on('click', function(){
		$('#arquivo').trigger('click');		
	});
	$('#arquivo').on('change',function(){
		var nomeArquivo = $('#arquivo').val();
		$('#nome-arq').text(nomeArquivo);
	});

	//click para aparecer os comentarios
	$('.abre').on('click',function(){
		var target = $(this).data('target');
		console.log(target);
		$('article').find('.comentarios').fadeOut(600);
		if($('#'+target).find('.comentarios').is(':visible')){
			$('#'+target).find('.comentarios').fadeOut(600);
			$('#'+target).find('.fecha').addClass('abre');
			$('#'+target).find('.abre').removeClass('fecha');
		}
		else{
			$('#'+target).find('.comentarios').fadeIn(900);
			$('#'+target).find('.abre').addClass('fecha');
			$('#'+target).find('.fecha').removeClass('abre');
		}
	});
	$('.tag').on('click',function(){
		var target = $(this).data('target');
		$('.tag').find('.tags-balao').fadeOut(600);
		if($('#'+target).is(':visible')){
			$('#'+target).fadeOut(600);
		}
		else{
			$('#'+target).fadeIn(900);
		}
	});

	var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
    $('#telefone').mask(SPMaskBehavior, spOptions);

	$('.input_cpf_cnpj').mask('000.000.000-00');

    $('.select_cpf_cnpj').on('click', function(){
		if($('.select_cpf_cnpj').val() == 'cpf'){
			console.log('cpf');
			$('.input_cpf_cnpj').mask('000.000.000-00');
		}
		if($('.select_cpf_cnpj').val() == 'cnpj'){
			console.log('cnpj');
			$('.input_cpf_cnpj').mask('00.000.000/0000-00');
		}
	});
});
