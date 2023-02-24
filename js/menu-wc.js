'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">SOT (FrontEnd)</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propiedades
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b0cfa92e19fa81521c5f6b5870d301ef5e0c108d9622acd22077bf75c0ff8ef95fd42f7343e4a56a3ec44e82214eb5abd31dfbe512a64857da3400aa86c64786"' : 'data-target="#xs-components-links-module-AppModule-b0cfa92e19fa81521c5f6b5870d301ef5e0c108d9622acd22077bf75c0ff8ef95fd42f7343e4a56a3ec44e82214eb5abd31dfbe512a64857da3400aa86c64786"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b0cfa92e19fa81521c5f6b5870d301ef5e0c108d9622acd22077bf75c0ff8ef95fd42f7343e4a56a3ec44e82214eb5abd31dfbe512a64857da3400aa86c64786"' :
                                            'id="xs-components-links-module-AppModule-b0cfa92e19fa81521c5f6b5870d301ef5e0c108d9622acd22077bf75c0ff8ef95fd42f7343e4a56a3ec44e82214eb5abd31dfbe512a64857da3400aa86c64786"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BootstrapModule.html" data-type="entity-link" >BootstrapModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CamaristasEnTurnoModule.html" data-type="entity-link" >CamaristasEnTurnoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CamaristasEnTurnoModule-7aae7c24fb0a546c1404de0f6eba6ee23734a259facf9ede074db2e54687d5a91bf14022777afb96f15dfa5458966b0b27af2a7ce86b7e6c9a7862ec9d3c2a08"' : 'data-target="#xs-components-links-module-CamaristasEnTurnoModule-7aae7c24fb0a546c1404de0f6eba6ee23734a259facf9ede074db2e54687d5a91bf14022777afb96f15dfa5458966b0b27af2a7ce86b7e6c9a7862ec9d3c2a08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CamaristasEnTurnoModule-7aae7c24fb0a546c1404de0f6eba6ee23734a259facf9ede074db2e54687d5a91bf14022777afb96f15dfa5458966b0b27af2a7ce86b7e6c9a7862ec9d3c2a08"' :
                                            'id="xs-components-links-module-CamaristasEnTurnoModule-7aae7c24fb0a546c1404de0f6eba6ee23734a259facf9ede074db2e54687d5a91bf14022777afb96f15dfa5458966b0b27af2a7ce86b7e6c9a7862ec9d3c2a08"' }>
                                            <li class="link">
                                                <a href="components/CamaristasEnTurnoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CamaristasEnTurnoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatalogosModule.html" data-type="entity-link" >CatalogosModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CocinabarModule.html" data-type="entity-link" >CocinabarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' : 'data-target="#xs-components-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' :
                                            'id="xs-components-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                            <li class="link">
                                                <a href="components/CocinabarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CocinabarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommandComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' : 'data-target="#xs-directives-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' :
                                        'id="xs-directives-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                        <li class="link">
                                            <a href="directives/CommandColorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandColorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' : 'data-target="#xs-injectables-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' :
                                        'id="xs-injectables-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                        <li class="link">
                                            <a href="injectables/CocinabarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CocinabarService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' : 'data-target="#xs-pipes-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' :
                                            'id="xs-pipes-links-module-CocinabarModule-d11432baef11102c1d77aea07124b59a0d3496e40e1e332186e99b898b7d77f62cdc47b1dd587b429843b0508499e966a8e930b1af9cca07b0f90b06e3cf827c"' }>
                                            <li class="link">
                                                <a href="pipes/CountdownPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CountdownPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConceptosMantenimientoModule.html" data-type="entity-link" >ConceptosMantenimientoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConceptosMantenimientoModule-b02daade32819c9d3ac42034639bbb3b30b6ed86eafa41346ba3b756e4190a6f455b852425d27056d932c222b89e88757f8513eeb85fff40486fedba0446147a"' : 'data-target="#xs-components-links-module-ConceptosMantenimientoModule-b02daade32819c9d3ac42034639bbb3b30b6ed86eafa41346ba3b756e4190a6f455b852425d27056d932c222b89e88757f8513eeb85fff40486fedba0446147a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConceptosMantenimientoModule-b02daade32819c9d3ac42034639bbb3b30b6ed86eafa41346ba3b756e4190a6f455b852425d27056d932c222b89e88757f8513eeb85fff40486fedba0446147a"' :
                                            'id="xs-components-links-module-ConceptosMantenimientoModule-b02daade32819c9d3ac42034639bbb3b30b6ed86eafa41346ba3b756e4190a6f455b852425d27056d932c222b89e88757f8513eeb85fff40486fedba0446147a"' }>
                                            <li class="link">
                                                <a href="components/ConceptosMantenimientoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConceptosMantenimientoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConceptosModule.html" data-type="entity-link" >ConceptosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConceptosModule-0ad21c43de334a8e5fca5afb07a68a49073c46fb40a804d75fc909127660ee1491f1e3dbb824410b28f02e7489d4b38c65df5abba5ff58136107e80cd3827d82"' : 'data-target="#xs-components-links-module-ConceptosModule-0ad21c43de334a8e5fca5afb07a68a49073c46fb40a804d75fc909127660ee1491f1e3dbb824410b28f02e7489d4b38c65df5abba5ff58136107e80cd3827d82"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConceptosModule-0ad21c43de334a8e5fca5afb07a68a49073c46fb40a804d75fc909127660ee1491f1e3dbb824410b28f02e7489d4b38c65df5abba5ff58136107e80cd3827d82"' :
                                            'id="xs-components-links-module-ConceptosModule-0ad21c43de334a8e5fca5afb07a68a49073c46fb40a804d75fc909127660ee1491f1e3dbb824410b28f02e7489d4b38c65df5abba5ff58136107e80cd3827d82"' }>
                                            <li class="link">
                                                <a href="components/ConceptosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConceptosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrearComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModificarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModificarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfiguracionesModule.html" data-type="entity-link" >ConfiguracionesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfiguracionesModule-a69916ab77a8e8026c07fa3368b8d0242c5b799acf4d16742b250690cebbe7c5a1c3010125e014bbaa08b15a4024ed2cec4650570b83963c5175f344c666f5f2"' : 'data-target="#xs-components-links-module-ConfiguracionesModule-a69916ab77a8e8026c07fa3368b8d0242c5b799acf4d16742b250690cebbe7c5a1c3010125e014bbaa08b15a4024ed2cec4650570b83963c5175f344c666f5f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfiguracionesModule-a69916ab77a8e8026c07fa3368b8d0242c5b799acf4d16742b250690cebbe7c5a1c3010125e014bbaa08b15a4024ed2cec4650570b83963c5175f344c666f5f2"' :
                                            'id="xs-components-links-module-ConfiguracionesModule-a69916ab77a8e8026c07fa3368b8d0242c5b799acf4d16742b250690cebbe7c5a1c3010125e014bbaa08b15a4024ed2cec4650570b83963c5175f344c666f5f2"' }>
                                            <li class="link">
                                                <a href="components/ConfiguracionesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfiguracionesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfiguracionPropinasModule.html" data-type="entity-link" >ConfiguracionPropinasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfiguracionPropinasModule-e30de7fb16cd2f05ff22568b4c9978f516df7ce5d6a8862f77f0b867fea253c4041fc879d58431a4bfa2219f39b82d8cd8575015bee00b60c75d3d20dbca3485"' : 'data-target="#xs-components-links-module-ConfiguracionPropinasModule-e30de7fb16cd2f05ff22568b4c9978f516df7ce5d6a8862f77f0b867fea253c4041fc879d58431a4bfa2219f39b82d8cd8575015bee00b60c75d3d20dbca3485"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfiguracionPropinasModule-e30de7fb16cd2f05ff22568b4c9978f516df7ce5d6a8862f77f0b867fea253c4041fc879d58431a4bfa2219f39b82d8cd8575015bee00b60c75d3d20dbca3485"' :
                                            'id="xs-components-links-module-ConfiguracionPropinasModule-e30de7fb16cd2f05ff22568b4c9978f516df7ce5d6a8862f77f0b867fea253c4041fc879d58431a4bfa2219f39b82d8cd8575015bee00b60c75d3d20dbca3485"' }>
                                            <li class="link">
                                                <a href="components/ConfiguracionPropinasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfiguracionPropinasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurarModule.html" data-type="entity-link" >ConfigurarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigurarModule-df0bf7bc72b741aa667fcc5a7056356e87c0592ab0468b73800a13d70e73916aa39a774f16ce99cefd79158fc6ca039606b4618712cd662d6e6a6c8cec70a51d"' : 'data-target="#xs-components-links-module-ConfigurarModule-df0bf7bc72b741aa667fcc5a7056356e87c0592ab0468b73800a13d70e73916aa39a774f16ce99cefd79158fc6ca039606b4618712cd662d6e6a6c8cec70a51d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigurarModule-df0bf7bc72b741aa667fcc5a7056356e87c0592ab0468b73800a13d70e73916aa39a774f16ce99cefd79158fc6ca039606b4618712cd662d6e6a6c8cec70a51d"' :
                                            'id="xs-components-links-module-ConfigurarModule-df0bf7bc72b741aa667fcc5a7056356e87c0592ab0468b73800a13d70e73916aa39a774f16ce99cefd79158fc6ca039606b4618712cd662d6e6a6c8cec70a51d"' }>
                                            <li class="link">
                                                <a href="components/ConfigurarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigurarTicketModule.html" data-type="entity-link" >ConfigurarTicketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigurarTicketModule-ba4cd47a631033aa3b9f445a50ccc63823197f232dd72528a0588653e01a0c64ac5fcf85257b7921d2ff2a44096d2963dfdcfd2b5f0c079de1d7b4364aec6147"' : 'data-target="#xs-components-links-module-ConfigurarTicketModule-ba4cd47a631033aa3b9f445a50ccc63823197f232dd72528a0588653e01a0c64ac5fcf85257b7921d2ff2a44096d2963dfdcfd2b5f0c079de1d7b4364aec6147"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigurarTicketModule-ba4cd47a631033aa3b9f445a50ccc63823197f232dd72528a0588653e01a0c64ac5fcf85257b7921d2ff2a44096d2963dfdcfd2b5f0c079de1d7b4364aec6147"' :
                                            'id="xs-components-links-module-ConfigurarTicketModule-ba4cd47a631033aa3b9f445a50ccc63823197f232dd72528a0588653e01a0c64ac5fcf85257b7921d2ff2a44096d2963dfdcfd2b5f0c079de1d7b4364aec6147"' }>
                                            <li class="link">
                                                <a href="components/ConfigurarTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigurarTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectImpresoraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectImpresoraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' : 'data-target="#xs-components-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' :
                                            'id="xs-components-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderBigComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderBigComponentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' : 'data-target="#xs-directives-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' :
                                        'id="xs-directives-links-module-CoreModule-ce07a6b97b3e93e1d44bdbe64bf6254ef7b5173bb5b94ef4a565fbcf7b64b7204abe34e2552e43f5666c16ccf46dea2c0f7e1565ec15dfcdb6b992387a999af3"' }>
                                        <li class="link">
                                            <a href="directives/ModalWidthDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalWidthDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeshabilitarHabitacionModule.html" data-type="entity-link" >DeshabilitarHabitacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeshabilitarHabitacionModule-8af01074656a2eb8003ce025e045193b77d3fbfae11004ad6189bb781f4eade7f5a3431c4e53d0c1927c4e8e546323a4dc317010d95e16408a3be7d63de0712e"' : 'data-target="#xs-components-links-module-DeshabilitarHabitacionModule-8af01074656a2eb8003ce025e045193b77d3fbfae11004ad6189bb781f4eade7f5a3431c4e53d0c1927c4e8e546323a4dc317010d95e16408a3be7d63de0712e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeshabilitarHabitacionModule-8af01074656a2eb8003ce025e045193b77d3fbfae11004ad6189bb781f4eade7f5a3431c4e53d0c1927c4e8e546323a4dc317010d95e16408a3be7d63de0712e"' :
                                            'id="xs-components-links-module-DeshabilitarHabitacionModule-8af01074656a2eb8003ce025e045193b77d3fbfae11004ad6189bb781f4eade7f5a3431c4e53d0c1927c4e8e546323a4dc317010d95e16408a3be7d63de0712e"' }>
                                            <li class="link">
                                                <a href="components/AutorizacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutorizacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeshabilitarHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeshabilitarHabitacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditarModule.html" data-type="entity-link" >EditarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditarModule-5258ba3edb88cf6a8b3b2235f673bf6efb618e1fdf93a5c33cb02dfbe2a00d0e70cc33bcfd7ecfd1e8b9895dd8d6a5a9f093190f1ddfad7dcfd6b031db1bbdab"' : 'data-target="#xs-components-links-module-EditarModule-5258ba3edb88cf6a8b3b2235f673bf6efb618e1fdf93a5c33cb02dfbe2a00d0e70cc33bcfd7ecfd1e8b9895dd8d6a5a9f093190f1ddfad7dcfd6b031db1bbdab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditarModule-5258ba3edb88cf6a8b3b2235f673bf6efb618e1fdf93a5c33cb02dfbe2a00d0e70cc33bcfd7ecfd1e8b9895dd8d6a5a9f093190f1ddfad7dcfd6b031db1bbdab"' :
                                            'id="xs-components-links-module-EditarModule-5258ba3edb88cf6a8b3b2235f673bf6efb618e1fdf93a5c33cb02dfbe2a00d0e70cc33bcfd7ecfd1e8b9895dd8d6a5a9f093190f1ddfad7dcfd6b031db1bbdab"' }>
                                            <li class="link">
                                                <a href="components/EditarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditarModule.html" data-type="entity-link" >EditarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditarModule-e3dec46a992f4563ede0e6950a2b6bf0b805c5e2a0dc2a23352bb3d2241b1183958f1a61c0cd04276afad3b135f01d5e37ff28c713189e90163e187abf74cc82-1"' : 'data-target="#xs-components-links-module-EditarModule-e3dec46a992f4563ede0e6950a2b6bf0b805c5e2a0dc2a23352bb3d2241b1183958f1a61c0cd04276afad3b135f01d5e37ff28c713189e90163e187abf74cc82-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditarModule-e3dec46a992f4563ede0e6950a2b6bf0b805c5e2a0dc2a23352bb3d2241b1183958f1a61c0cd04276afad3b135f01d5e37ff28c713189e90163e187abf74cc82-1"' :
                                            'id="xs-components-links-module-EditarModule-e3dec46a992f4563ede0e6950a2b6bf0b805c5e2a0dc2a23352bb3d2241b1183958f1a61c0cd04276afad3b135f01d5e37ff28c713189e90163e187abf74cc82-1"' }>
                                            <li class="link">
                                                <a href="components/CardExtraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardExtraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditarModule.html" data-type="entity-link" >EditarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditarModule-6b0667b130c9eee428554a108e9730d98e61b3d04e84751d5f0dbcbcd6b38ffb9f538d7803510090ddac40cc46350bae675f38cdf7de7c3d37c16cec3de3d266-2"' : 'data-target="#xs-components-links-module-EditarModule-6b0667b130c9eee428554a108e9730d98e61b3d04e84751d5f0dbcbcd6b38ffb9f538d7803510090ddac40cc46350bae675f38cdf7de7c3d37c16cec3de3d266-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditarModule-6b0667b130c9eee428554a108e9730d98e61b3d04e84751d5f0dbcbcd6b38ffb9f538d7803510090ddac40cc46350bae675f38cdf7de7c3d37c16cec3de3d266-2"' :
                                            'id="xs-components-links-module-EditarModule-6b0667b130c9eee428554a108e9730d98e61b3d04e84751d5f0dbcbcd6b38ffb9f538d7803510090ddac40cc46350bae675f38cdf7de7c3d37c16cec3de3d266-2"' }>
                                            <li class="link">
                                                <a href="components/EditarComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntradaHabitacionModule.html" data-type="entity-link" >EntradaHabitacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EntradaHabitacionModule-aa85909641f8c5265cb40a54f69ef605c4f3f2979209ae48e432c1a407408727f43bb87cd706ee225c20fdcb06f6d5b7c716a095bfc0d7601b8ede7eac6c95ce"' : 'data-target="#xs-components-links-module-EntradaHabitacionModule-aa85909641f8c5265cb40a54f69ef605c4f3f2979209ae48e432c1a407408727f43bb87cd706ee225c20fdcb06f6d5b7c716a095bfc0d7601b8ede7eac6c95ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EntradaHabitacionModule-aa85909641f8c5265cb40a54f69ef605c4f3f2979209ae48e432c1a407408727f43bb87cd706ee225c20fdcb06f6d5b7c716a095bfc0d7601b8ede7eac6c95ce"' :
                                            'id="xs-components-links-module-EntradaHabitacionModule-aa85909641f8c5265cb40a54f69ef605c4f3f2979209ae48e432c1a407408727f43bb87cd706ee225c20fdcb06f6d5b7c716a095bfc0d7601b8ede7eac6c95ce"' }>
                                            <li class="link">
                                                <a href="components/CambioHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CambioHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelarEntradaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancelarEntradaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancelarHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancelarHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CobrarPendienteHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CobrarPendienteHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntradaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntradaHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagoMixtoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagoMixtoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagoRentaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagoRentaHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagoTarjetaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagoTarjetaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentaExtraHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentaExtraHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RentaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RentaHabitacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FajillasModule.html" data-type="entity-link" >FajillasModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GastosGeneralesModule.html" data-type="entity-link" >GastosGeneralesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GastosGeneralesModule-a2ebc54e68053b56f102fb6ab3702d495a0281ab4b12a9774f18ea9d96c780bdf1d9338ffc6263288d3909879e30275957bba14b4aa8caee1f0325d9711e908e"' : 'data-target="#xs-components-links-module-GastosGeneralesModule-a2ebc54e68053b56f102fb6ab3702d495a0281ab4b12a9774f18ea9d96c780bdf1d9338ffc6263288d3909879e30275957bba14b4aa8caee1f0325d9711e908e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GastosGeneralesModule-a2ebc54e68053b56f102fb6ab3702d495a0281ab4b12a9774f18ea9d96c780bdf1d9338ffc6263288d3909879e30275957bba14b4aa8caee1f0325d9711e908e"' :
                                            'id="xs-components-links-module-GastosGeneralesModule-a2ebc54e68053b56f102fb6ab3702d495a0281ab4b12a9774f18ea9d96c780bdf1d9338ffc6263288d3909879e30275957bba14b4aa8caee1f0325d9711e908e"' }>
                                            <li class="link">
                                                <a href="components/CrearGastoGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearGastoGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GastosGeneralesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GastosGeneralesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModificarGastosGeneralesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModificarGastosGeneralesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerGastosGeneralesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerGastosGeneralesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GastosModule.html" data-type="entity-link" >GastosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GastosModule-d7707a996caff17c4f8b61669f38ed17f8f364aa70d67d899ad5f891678d0d6d71a95e16eb1a25c5ca336e62f6fd8ed404ede82bb0f3f9994ca9a7d5cf31665b"' : 'data-target="#xs-components-links-module-GastosModule-d7707a996caff17c4f8b61669f38ed17f8f364aa70d67d899ad5f891678d0d6d71a95e16eb1a25c5ca336e62f6fd8ed404ede82bb0f3f9994ca9a7d5cf31665b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GastosModule-d7707a996caff17c4f8b61669f38ed17f8f364aa70d67d899ad5f891678d0d6d71a95e16eb1a25c5ca336e62f6fd8ed404ede82bb0f3f9994ca9a7d5cf31665b"' :
                                            'id="xs-components-links-module-GastosModule-d7707a996caff17c4f8b61669f38ed17f8f364aa70d67d899ad5f891678d0d6d71a95e16eb1a25c5ca336e62f6fd8ed404ede82bb0f3f9994ca9a7d5cf31665b"' }>
                                            <li class="link">
                                                <a href="components/GastosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GastosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link" >GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HabitacionesModule.html" data-type="entity-link" >HabitacionesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' : 'data-target="#xs-components-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' :
                                            'id="xs-components-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                            <li class="link">
                                                <a href="components/DarEntradaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DarEntradaHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarHiddenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarHiddenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' : 'data-target="#xs-directives-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' :
                                        'id="xs-directives-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                        <li class="link">
                                            <a href="directives/LogoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SidenavDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' : 'data-target="#xs-injectables-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' :
                                        'id="xs-injectables-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' : 'data-target="#xs-pipes-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' :
                                            'id="xs-pipes-links-module-HomeModule-de88014e982e043d728a7a1ac5b485c987476b3352413747b5f01856303551e3dc0d6c0a0de327b08a452772dec0227dd3ae651f2f0fdffdd914c549a7dc0401"' }>
                                            <li class="link">
                                                <a href="pipes/CutStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CutStringPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImpresorasModule.html" data-type="entity-link" >ImpresorasModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LimpiezaModule.html" data-type="entity-link" >LimpiezaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LimpiezaModule-d0be562fa07653457e002fa1e7168ba1a7684e5a5d21d1a1f081d3c7689ebe1263e5b9b7e243c26307ac606ce4c1d440a8d3a9b921dc75f1a1067bf3e0bf2c73"' : 'data-target="#xs-components-links-module-LimpiezaModule-d0be562fa07653457e002fa1e7168ba1a7684e5a5d21d1a1f081d3c7689ebe1263e5b9b7e243c26307ac606ce4c1d440a8d3a9b921dc75f1a1067bf3e0bf2c73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LimpiezaModule-d0be562fa07653457e002fa1e7168ba1a7684e5a5d21d1a1f081d3c7689ebe1263e5b9b7e243c26307ac606ce4c1d440a8d3a9b921dc75f1a1067bf3e0bf2c73"' :
                                            'id="xs-components-links-module-LimpiezaModule-d0be562fa07653457e002fa1e7168ba1a7684e5a5d21d1a1f081d3c7689ebe1263e5b9b7e243c26307ac606ce4c1d440a8d3a9b921dc75f1a1067bf3e0bf2c73"' }>
                                            <li class="link">
                                                <a href="components/LimpiezaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LimpiezaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListaModule.html" data-type="entity-link" >ListaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListaModule-d98b58f65f59a2eedfdead63f1e9d2163720d0a4be1133a53d098b828e945ec82040f7ec9d60fc1f02be7b2ac1147317dc26ca891cd6ad9b3799901f1be5085f"' : 'data-target="#xs-components-links-module-ListaModule-d98b58f65f59a2eedfdead63f1e9d2163720d0a4be1133a53d098b828e945ec82040f7ec9d60fc1f02be7b2ac1147317dc26ca891cd6ad9b3799901f1be5085f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListaModule-d98b58f65f59a2eedfdead63f1e9d2163720d0a4be1133a53d098b828e945ec82040f7ec9d60fc1f02be7b2ac1147317dc26ca891cd6ad9b3799901f1be5085f"' :
                                            'id="xs-components-links-module-ListaModule-d98b58f65f59a2eedfdead63f1e9d2163720d0a4be1133a53d098b828e945ec82040f7ec9d60fc1f02be7b2ac1147317dc26ca891cd6ad9b3799901f1be5085f"' }>
                                            <li class="link">
                                                <a href="components/ListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' : 'data-target="#xs-components-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' :
                                            'id="xs-components-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' : 'data-target="#xs-directives-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' :
                                        'id="xs-directives-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                        <li class="link">
                                            <a href="directives/MenuButtonDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuButtonDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' : 'data-target="#xs-injectables-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' :
                                        'id="xs-injectables-links-module-LoginModule-266f085db0f61b7de4ccb7d4d7e9db693e076448f2e1462d7dc28907345d582a8c25af29da51c5d7e88f6890f5ec2ba2292a294dbb6da72044b8fef9486eca30"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MantenimientoModule.html" data-type="entity-link" >MantenimientoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MantenimientoModule-ee5418cd9e06de716c195974d3cf3495ec980fa3490b0bc55e8ad63c2685b032eb24ba5800627b8d6e000a204beaf94752318b4a36256c704b6ddcad0acc6481"' : 'data-target="#xs-components-links-module-MantenimientoModule-ee5418cd9e06de716c195974d3cf3495ec980fa3490b0bc55e8ad63c2685b032eb24ba5800627b8d6e000a204beaf94752318b4a36256c704b6ddcad0acc6481"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MantenimientoModule-ee5418cd9e06de716c195974d3cf3495ec980fa3490b0bc55e8ad63c2685b032eb24ba5800627b8d6e000a204beaf94752318b4a36256c704b6ddcad0acc6481"' :
                                            'id="xs-components-links-module-MantenimientoModule-ee5418cd9e06de716c195974d3cf3495ec980fa3490b0bc55e8ad63c2685b032eb24ba5800627b8d6e000a204beaf94752318b4a36256c704b6ddcad0acc6481"' }>
                                            <li class="link">
                                                <a href="components/MantenimientoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MantenimientoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MatriculaModule.html" data-type="entity-link" >MatriculaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MatriculaModule-f7de9506cb9de24c79a02dc3fb326bec588e0598b489374beaee824c566fece121cb3930070b260ac57721703f33b5709f354b3c3ecf318a49f9d1c9ad4e64c4"' : 'data-target="#xs-components-links-module-MatriculaModule-f7de9506cb9de24c79a02dc3fb326bec588e0598b489374beaee824c566fece121cb3930070b260ac57721703f33b5709f354b3c3ecf318a49f9d1c9ad4e64c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MatriculaModule-f7de9506cb9de24c79a02dc3fb326bec588e0598b489374beaee824c566fece121cb3930070b260ac57721703f33b5709f354b3c3ecf318a49f9d1c9ad4e64c4"' :
                                            'id="xs-components-links-module-MatriculaModule-f7de9506cb9de24c79a02dc3fb326bec588e0598b489374beaee824c566fece121cb3930070b260ac57721703f33b5709f354b3c3ecf318a49f9d1c9ad4e64c4"' }>
                                            <li class="link">
                                                <a href="components/DetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatriculaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatriculaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NuevoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NuevoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovimientosModule.html" data-type="entity-link" >MovimientosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MovimientosModule-2b2de81ef564d5a9717c56e9c7e836f6ceeecb61404b251a23410b641c3805d5d44a417bc84e0efb87388f0484bcd10cba5346df7e2782f4c1382a0cca0045d5"' : 'data-target="#xs-components-links-module-MovimientosModule-2b2de81ef564d5a9717c56e9c7e836f6ceeecb61404b251a23410b641c3805d5d44a417bc84e0efb87388f0484bcd10cba5346df7e2782f4c1382a0cca0045d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MovimientosModule-2b2de81ef564d5a9717c56e9c7e836f6ceeecb61404b251a23410b641c3805d5d44a417bc84e0efb87388f0484bcd10cba5346df7e2782f4c1382a0cca0045d5"' :
                                            'id="xs-components-links-module-MovimientosModule-2b2de81ef564d5a9717c56e9c7e836f6ceeecb61404b251a23410b641c3805d5d44a417bc84e0efb87388f0484bcd10cba5346df7e2782f4c1382a0cca0045d5"' }>
                                            <li class="link">
                                                <a href="components/MovimientosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovimientosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaquetesModule.html" data-type="entity-link" >PaquetesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaquetesModule-3f4c535d3c64baa7fdf067417e8385940f6e28759db7664214472824afedb45a69c3b1886b28b03a10ce6d2e3d193d4eb470f7a9114335e577a81b7f67706baa"' : 'data-target="#xs-components-links-module-PaquetesModule-3f4c535d3c64baa7fdf067417e8385940f6e28759db7664214472824afedb45a69c3b1886b28b03a10ce6d2e3d193d4eb470f7a9114335e577a81b7f67706baa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaquetesModule-3f4c535d3c64baa7fdf067417e8385940f6e28759db7664214472824afedb45a69c3b1886b28b03a10ce6d2e3d193d4eb470f7a9114335e577a81b7f67706baa"' :
                                            'id="xs-components-links-module-PaquetesModule-3f4c535d3c64baa7fdf067417e8385940f6e28759db7664214472824afedb45a69c3b1886b28b03a10ce6d2e3d193d4eb470f7a9114335e577a81b7f67706baa"' }>
                                            <li class="link">
                                                <a href="components/PaquetesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaquetesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrimengModule.html" data-type="entity-link" >PrimengModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PrimengModule-223c1eed184525271272f42a629b8651de448a88d6fe05397edd13120a697ce8369e1a50fbb80e66980a9c532d95e0e53fca46c86aa5bfd967541abc59593f70"' : 'data-target="#xs-directives-links-module-PrimengModule-223c1eed184525271272f42a629b8651de448a88d6fe05397edd13120a697ce8369e1a50fbb80e66980a9c532d95e0e53fca46c86aa5bfd967541abc59593f70"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PrimengModule-223c1eed184525271272f42a629b8651de448a88d6fe05397edd13120a697ce8369e1a50fbb80e66980a9c532d95e0e53fca46c86aa5bfd967541abc59593f70"' :
                                        'id="xs-directives-links-module-PrimengModule-223c1eed184525271272f42a629b8651de448a88d6fe05397edd13120a697ce8369e1a50fbb80e66980a9c532d95e0e53fca46c86aa5bfd967541abc59593f70"' }>
                                        <li class="link">
                                            <a href="directives/NgmodalDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgmodalDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistroModule.html" data-type="entity-link" >RegistroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistroModule-33c530ae3b1c1841776910aaea3bb279b846fbc6c4fa9348f37268e4942dbd86ce6236affe578a757460231b384d04db7dd801ff650a00e3b5c35d70343fddb0"' : 'data-target="#xs-components-links-module-RegistroModule-33c530ae3b1c1841776910aaea3bb279b846fbc6c4fa9348f37268e4942dbd86ce6236affe578a757460231b384d04db7dd801ff650a00e3b5c35d70343fddb0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistroModule-33c530ae3b1c1841776910aaea3bb279b846fbc6c4fa9348f37268e4942dbd86ce6236affe578a757460231b384d04db7dd801ff650a00e3b5c35d70343fddb0"' :
                                            'id="xs-components-links-module-RegistroModule-33c530ae3b1c1841776910aaea3bb279b846fbc6c4fa9348f37268e4942dbd86ce6236affe578a757460231b384d04db7dd801ff650a00e3b5c35d70343fddb0"' }>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistroModule.html" data-type="entity-link" >RegistroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistroModule-4702e5919784523665c359023c3f4c941bffe68aeb8f1eb93f81c450626cf9091afdf1e4efa3472afcf628c6b8ae769d8c8558ce78711cd5c4512b0c3192a802-1"' : 'data-target="#xs-components-links-module-RegistroModule-4702e5919784523665c359023c3f4c941bffe68aeb8f1eb93f81c450626cf9091afdf1e4efa3472afcf628c6b8ae769d8c8558ce78711cd5c4512b0c3192a802-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistroModule-4702e5919784523665c359023c3f4c941bffe68aeb8f1eb93f81c450626cf9091afdf1e4efa3472afcf628c6b8ae769d8c8558ce78711cd5c4512b0c3192a802-1"' :
                                            'id="xs-components-links-module-RegistroModule-4702e5919784523665c359023c3f4c941bffe68aeb8f1eb93f81c450626cf9091afdf1e4efa3472afcf628c6b8ae769d8c8558ce78711cd5c4512b0c3192a802-1"' }>
                                            <li class="link">
                                                <a href="components/CardExtraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardExtraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistroComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistroModule.html" data-type="entity-link" >RegistroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistroModule-19f828544b5df04f7345de5432ca757d34a5083d58f7ab8891af09a2fe3821c5458961566f9c24df93b054e3105d8750b3c6f443c5cdfb076db1d1fe4401d27e-2"' : 'data-target="#xs-components-links-module-RegistroModule-19f828544b5df04f7345de5432ca757d34a5083d58f7ab8891af09a2fe3821c5458961566f9c24df93b054e3105d8750b3c6f443c5cdfb076db1d1fe4401d27e-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistroModule-19f828544b5df04f7345de5432ca757d34a5083d58f7ab8891af09a2fe3821c5458961566f9c24df93b054e3105d8750b3c6f443c5cdfb076db1d1fe4401d27e-2"' :
                                            'id="xs-components-links-module-RegistroModule-19f828544b5df04f7345de5432ca757d34a5083d58f7ab8891af09a2fe3821c5458961566f9c24df93b054e3105d8750b3c6f443c5cdfb076db1d1fe4401d27e-2"' }>
                                            <li class="link">
                                                <a href="components/RegistroComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportarModule.html" data-type="entity-link" >ReportarModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReservacionModule.html" data-type="entity-link" >ReservacionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReservacionModule-84bcb6eaa0e95849dd49587150d8791f8cc2f233743cccfa054477740a99ffb9a110f4fe617e902d9dedab4a6390b609b6a68bdc1ae9c9accd4a24734ee12f61"' : 'data-target="#xs-components-links-module-ReservacionModule-84bcb6eaa0e95849dd49587150d8791f8cc2f233743cccfa054477740a99ffb9a110f4fe617e902d9dedab4a6390b609b6a68bdc1ae9c9accd4a24734ee12f61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReservacionModule-84bcb6eaa0e95849dd49587150d8791f8cc2f233743cccfa054477740a99ffb9a110f4fe617e902d9dedab4a6390b609b6a68bdc1ae9c9accd4a24734ee12f61"' :
                                            'id="xs-components-links-module-ReservacionModule-84bcb6eaa0e95849dd49587150d8791f8cc2f233743cccfa054477740a99ffb9a110f4fe617e902d9dedab4a6390b609b6a68bdc1ae9c9accd4a24734ee12f61"' }>
                                            <li class="link">
                                                <a href="components/AsignarReservacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsignarReservacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComponentReservacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComponentReservacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesYPermisosModule.html" data-type="entity-link" >RolesYPermisosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesYPermisosModule-729b07eb3ebe05e56e6b655efe68984ccda3f77f970563830a04b1241c96d679dcd6c878bc3a6bec96411ebcae0199d165bb7b67b1bad842464efdeb91b2a30a"' : 'data-target="#xs-components-links-module-RolesYPermisosModule-729b07eb3ebe05e56e6b655efe68984ccda3f77f970563830a04b1241c96d679dcd6c878bc3a6bec96411ebcae0199d165bb7b67b1bad842464efdeb91b2a30a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesYPermisosModule-729b07eb3ebe05e56e6b655efe68984ccda3f77f970563830a04b1241c96d679dcd6c878bc3a6bec96411ebcae0199d165bb7b67b1bad842464efdeb91b2a30a"' :
                                            'id="xs-components-links-module-RolesYPermisosModule-729b07eb3ebe05e56e6b655efe68984ccda3f77f970563830a04b1241c96d679dcd6c878bc3a6bec96411ebcae0199d165bb7b67b1bad842464efdeb91b2a30a"' }>
                                            <li class="link">
                                                <a href="components/AgregarEditarRolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarEditarRolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaDeRolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaDeRolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesYPermisosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesYPermisosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomServiceModule.html" data-type="entity-link" >RoomServiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomServiceModule-4b07ece5e52bb0ff8761c1991dfad7133a692b72d1808dafc6fc72473d1da7bcf7fb90482014fb83545d7712f4ad0a13de8aabdeeea32c45d7c0baa8ebc2628b"' : 'data-target="#xs-components-links-module-RoomServiceModule-4b07ece5e52bb0ff8761c1991dfad7133a692b72d1808dafc6fc72473d1da7bcf7fb90482014fb83545d7712f4ad0a13de8aabdeeea32c45d7c0baa8ebc2628b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomServiceModule-4b07ece5e52bb0ff8761c1991dfad7133a692b72d1808dafc6fc72473d1da7bcf7fb90482014fb83545d7712f4ad0a13de8aabdeeea32c45d7c0baa8ebc2628b"' :
                                            'id="xs-components-links-module-RoomServiceModule-4b07ece5e52bb0ff8761c1991dfad7133a692b72d1808dafc6fc72473d1da7bcf7fb90482014fb83545d7712f4ad0a13de8aabdeeea32c45d7c0baa8ebc2628b"' }>
                                            <li class="link">
                                                <a href="components/CrearComandaRoomserviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CrearComandaRoomserviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiberarPagarRoomServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiberarPagarRoomServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagoComandasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagoComandasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TarjetasComandaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TarjetasComandaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomTypesModule.html" data-type="entity-link" >RoomTypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' : 'data-target="#xs-components-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' :
                                            'id="xs-components-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                            <li class="link">
                                                <a href="components/MessageModalAutoclosableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageModalAutoclosableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomTypesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomTypesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' : 'data-target="#xs-injectables-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' :
                                        'id="xs-injectables-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                        <li class="link">
                                            <a href="injectables/RoomService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' : 'data-target="#xs-pipes-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' :
                                            'id="xs-pipes-links-module-RoomTypesModule-5ddac6747880229e866e14401f09dcff204e0f542e142e63fa8994b622cb1d4f85a2281b4e583f8e27ff91a42e004613259cf3a23ca7ba08a2dcc88034345fb5"' }>
                                            <li class="link">
                                                <a href="pipes/CutStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CutStringPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ReplacePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReplacePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimerPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TimerPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SalidaModule.html" data-type="entity-link" >SalidaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SalidaModule-1661ec646b16307af302d121ad1102b684f9cea939bcd5970b701746b662528448d5083d1dfbbb9324080000950e0f7cd5903f3fb69d485a5bf2f4db54da9da2"' : 'data-target="#xs-components-links-module-SalidaModule-1661ec646b16307af302d121ad1102b684f9cea939bcd5970b701746b662528448d5083d1dfbbb9324080000950e0f7cd5903f3fb69d485a5bf2f4db54da9da2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SalidaModule-1661ec646b16307af302d121ad1102b684f9cea939bcd5970b701746b662528448d5083d1dfbbb9324080000950e0f7cd5903f3fb69d485a5bf2f4db54da9da2"' :
                                            'id="xs-components-links-module-SalidaModule-1661ec646b16307af302d121ad1102b684f9cea939bcd5970b701746b662528448d5083d1dfbbb9324080000950e0f7cd5903f3fb69d485a5bf2f4db54da9da2"' }>
                                            <li class="link">
                                                <a href="components/AceptarSalidaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AceptarSalidaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiberarHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiberarHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LimpiezaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LimpiezaHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MandarLimpiezaHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" class="deprecated-name">MandarLimpiezaHabitacionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MandarSupervisarHabitacionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MandarSupervisarHabitacionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' : 'data-target="#xs-components-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' :
                                            'id="xs-components-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                            <li class="link">
                                                <a href="components/AdminMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HamburguesaMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HamburguesaMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomsMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomsMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' : 'data-target="#xs-injectables-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' :
                                        'id="xs-injectables-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                        <li class="link">
                                            <a href="injectables/SidebarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' : 'data-target="#xs-pipes-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Tuberías</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' :
                                            'id="xs-pipes-links-module-SidebarModule-b00bae261227a10befd57d54bfe431de866767ad0d5acbef1ae210eee93ba09c6e1b9196c66c648aaa8a067930b2661884565810a124c77211e9097a937de090"' }>
                                            <li class="link">
                                                <a href="pipes/CutStringPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CutStringPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TarifasModule.html" data-type="entity-link" >TarifasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TarifasModule-1156a33a512e738bf6e1d5837fd21415c8f2ae2d750038695927e5a3b69a91bdcc97f7b16b89ff4491c23376cb0294ca29430bac68a678a07f6f3a4fe288f63c"' : 'data-target="#xs-components-links-module-TarifasModule-1156a33a512e738bf6e1d5837fd21415c8f2ae2d750038695927e5a3b69a91bdcc97f7b16b89ff4491c23376cb0294ca29430bac68a678a07f6f3a4fe288f63c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TarifasModule-1156a33a512e738bf6e1d5837fd21415c8f2ae2d750038695927e5a3b69a91bdcc97f7b16b89ff4491c23376cb0294ca29430bac68a678a07f6f3a4fe288f63c"' :
                                            'id="xs-components-links-module-TarifasModule-1156a33a512e738bf6e1d5837fd21415c8f2ae2d750038695927e5a3b69a91bdcc97f7b16b89ff4491c23376cb0294ca29430bac68a678a07f6f3a4fe288f63c"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TarifasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TarifasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicketRentaModule.html" data-type="entity-link" >TicketRentaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TicketRentaModule-5f55c7e396af886b00717c1f525b6edbca2ae10ad338e75114a800972cd5b3581132ab82285ef576554b34911e6bae1a2d9040958bdb9e774297cfb6a2df065c"' : 'data-target="#xs-components-links-module-TicketRentaModule-5f55c7e396af886b00717c1f525b6edbca2ae10ad338e75114a800972cd5b3581132ab82285ef576554b34911e6bae1a2d9040958bdb9e774297cfb6a2df065c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TicketRentaModule-5f55c7e396af886b00717c1f525b6edbca2ae10ad338e75114a800972cd5b3581132ab82285ef576554b34911e6bae1a2d9040958bdb9e774297cfb6a2df065c"' :
                                            'id="xs-components-links-module-TicketRentaModule-5f55c7e396af886b00717c1f525b6edbca2ae10ad338e75114a800972cd5b3581132ab82285ef576554b34911e6bae1a2d9040958bdb9e774297cfb6a2df065c"' }>
                                            <li class="link">
                                                <a href="components/TicketRentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketRentaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerModule.html" data-type="entity-link" >VerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerModule-a76cc6bc9d5758a4a149534da2575b41e827caeb1f104e14b52334631eeb98d64e3d462120e84ebd9e71fbd5d95d06366fed1004167c76b9bd5cf642db97c6d9"' : 'data-target="#xs-components-links-module-VerModule-a76cc6bc9d5758a4a149534da2575b41e827caeb1f104e14b52334631eeb98d64e3d462120e84ebd9e71fbd5d95d06366fed1004167c76b9bd5cf642db97c6d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerModule-a76cc6bc9d5758a4a149534da2575b41e827caeb1f104e14b52334631eeb98d64e3d462120e84ebd9e71fbd5d95d06366fed1004167c76b9bd5cf642db97c6d9"' :
                                            'id="xs-components-links-module-VerModule-a76cc6bc9d5758a4a149534da2575b41e827caeb1f104e14b52334631eeb98d64e3d462120e84ebd9e71fbd5d95d06366fed1004167c76b9bd5cf642db97c6d9"' }>
                                            <li class="link">
                                                <a href="components/VerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerModule.html" data-type="entity-link" >VerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerModule-cb0f29b77ce0688fb336f7e008ce6ebb5ec05c14bc652a29e7f23d1d4f650c06b0024837351d61cc41823b336300496c431a409c42bca8497cd094a029a94556-1"' : 'data-target="#xs-components-links-module-VerModule-cb0f29b77ce0688fb336f7e008ce6ebb5ec05c14bc652a29e7f23d1d4f650c06b0024837351d61cc41823b336300496c431a409c42bca8497cd094a029a94556-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerModule-cb0f29b77ce0688fb336f7e008ce6ebb5ec05c14bc652a29e7f23d1d4f650c06b0024837351d61cc41823b336300496c431a409c42bca8497cd094a029a94556-1"' :
                                            'id="xs-components-links-module-VerModule-cb0f29b77ce0688fb336f7e008ce6ebb5ec05c14bc652a29e7f23d1d4f650c06b0024837351d61cc41823b336300496c431a409c42bca8497cd094a029a94556-1"' }>
                                            <li class="link">
                                                <a href="components/CardExtraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardExtraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerModule.html" data-type="entity-link" >VerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerModule-af21a7eaa101359581c3757a6eed4f437c01084062546e5d07ac79c67036467d61dbbd20385a973afe0fbb227eb78eba587179cca82efcc0a6e0755b4be884eb-2"' : 'data-target="#xs-components-links-module-VerModule-af21a7eaa101359581c3757a6eed4f437c01084062546e5d07ac79c67036467d61dbbd20385a973afe0fbb227eb78eba587179cca82efcc0a6e0755b4be884eb-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerModule-af21a7eaa101359581c3757a6eed4f437c01084062546e5d07ac79c67036467d61dbbd20385a973afe0fbb227eb78eba587179cca82efcc0a6e0755b4be884eb-2"' :
                                            'id="xs-components-links-module-VerModule-af21a7eaa101359581c3757a6eed4f437c01084062546e5d07ac79c67036467d61dbbd20385a973afe0fbb227eb78eba587179cca82efcc0a6e0755b4be884eb-2"' }>
                                            <li class="link">
                                                <a href="components/VerComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerModule.html" data-type="entity-link" >VerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerModule-60782c75781c9d693dee42d390b1fe11d73fc7062827904f652284fb791ad845514d438b535951df77c4ba9ff28a1734461e2879b668f1d2ab84c4278f91b4ea-3"' : 'data-target="#xs-components-links-module-VerModule-60782c75781c9d693dee42d390b1fe11d73fc7062827904f652284fb791ad845514d438b535951df77c4ba9ff28a1734461e2879b668f1d2ab84c4278f91b4ea-3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerModule-60782c75781c9d693dee42d390b1fe11d73fc7062827904f652284fb791ad845514d438b535951df77c4ba9ff28a1734461e2879b668f1d2ab84c4278f91b4ea-3"' :
                                            'id="xs-components-links-module-VerModule-60782c75781c9d693dee42d390b1fe11d73fc7062827904f652284fb791ad845514d438b535951df77c4ba9ff28a1734461e2879b668f1d2ab84c4278f91b4ea-3"' }>
                                            <li class="link">
                                                <a href="components/TicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerComponent-3.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Componentes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CardExtraComponent.html" data-type="entity-link" >CardExtraComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfimModalMessageComponent.html" data-type="entity-link" >ConfimModalMessageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListaComponent-1.html" data-type="entity-link" >ListaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MessageModalAutoclosableComponent.html" data-type="entity-link" >MessageModalAutoclosableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PagoMixtoComponent-1.html" data-type="entity-link" >PagoMixtoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PagoTarjetaComponent-1.html" data-type="entity-link" >PagoTarjetaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketComponent.html" data-type="entity-link" >TicketComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Clases</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/articulos.html" data-type="entity-link" >articulos</a>
                            </li>
                            <li class="link">
                                <a href="classes/comanda.html" data-type="entity-link" >comanda</a>
                            </li>
                            <li class="link">
                                <a href="classes/ControlDias.html" data-type="entity-link" >ControlDias</a>
                            </li>
                            <li class="link">
                                <a href="classes/controlFormMixto.html" data-type="entity-link" >controlFormMixto</a>
                            </li>
                            <li class="link">
                                <a href="classes/controlHabitacion.html" data-type="entity-link" >controlHabitacion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Room.html" data-type="entity-link" >Room</a>
                            </li>
                            <li class="link">
                                <a href="classes/validaciones.html" data-type="entity-link" >validaciones</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CambiarEstadoGQL.html" data-type="entity-link" >CambiarEstadoGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CambioHabitacionService.html" data-type="entity-link" >CambioHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CancelarComandaGQL.html" data-type="entity-link" >CancelarComandaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CancelarComandaService.html" data-type="entity-link" >CancelarComandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CocinabarService.html" data-type="entity-link" >CocinabarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComandaPagoEnvioService.html" data-type="entity-link" >ComandaPagoEnvioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComunicacionPagoService.html" data-type="entity-link" >ComunicacionPagoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrearExtrasGQL.html" data-type="entity-link" >CrearExtrasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CrearRentaGQL.html" data-type="entity-link" >CrearRentaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntradaDeHabitacionService.html" data-type="entity-link" >EntradaDeHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntregarComandaGQL.html" data-type="entity-link" >EntregarComandaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExtrasDeHabitacionService.html" data-type="entity-link" >ExtrasDeHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FingerprintService.html" data-type="entity-link" >FingerprintService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllComandasInfoGQL.html" data-type="entity-link" >GetAllComandasInfoGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllInfoComandaService.html" data-type="entity-link" >GetAllInfoComandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllInfoComandasSuscripcionGQL.html" data-type="entity-link" >GetAllInfoComandasSuscripcionGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAllRoomsGQL.html" data-type="entity-link" >GetAllRoomsGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetArticulosTodoComandaGQL.html" data-type="entity-link" >GetArticulosTodoComandaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetComandasBarYCocinaGQL.html" data-type="entity-link" >GetComandasBarYCocinaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetComandaService.html" data-type="entity-link" >GetComandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetExtrasGQL.html" data-type="entity-link" >GetExtrasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetHabitacionIdGQL.html" data-type="entity-link" >GetHabitacionIdGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetRentaService.html" data-type="entity-link" >GetRentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HabitacionDetalladaGQL.html" data-type="entity-link" >HabitacionDetalladaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HabitacionGQL.html" data-type="entity-link" >HabitacionGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdHabitacionService.html" data-type="entity-link" >IdHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiberarBarrraGQL.html" data-type="entity-link" >LiberarBarrraGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiberarCoandaService.html" data-type="entity-link" >LiberarCoandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiberarCocinaGQL.html" data-type="entity-link" >LiberarCocinaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatriculaService.html" data-type="entity-link" >MatriculaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MutarEstadoHabitacionService.html" data-type="entity-link" >MutarEstadoHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObtenerHabitacionesService.html" data-type="entity-link" >ObtenerHabitacionesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagarComandaGQL.html" data-type="entity-link" >PagarComandaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagarExtraGQL.html" data-type="entity-link" >PagarExtraGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrintService.html" data-type="entity-link" >PrintService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductosRSService.html" data-type="entity-link" >ProductosRSService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RentaGQL.html" data-type="entity-link" >RentaGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomService.html" data-type="entity-link" >RoomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoomTypesService.html" data-type="entity-link" >RoomTypesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SalidaHabitacionGQL.html" data-type="entity-link" >SalidaHabitacionGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SalidaHabitacionService.html" data-type="entity-link" >SalidaHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendComandaService.html" data-type="entity-link" >SendComandaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionStorageService.html" data-type="entity-link" >SessionStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionBarComandasGQL.html" data-type="entity-link" >SubscriptionBarComandasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionCocinaComandasGQL.html" data-type="entity-link" >SubscriptionCocinaComandasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionComandasGQL.html" data-type="entity-link" >SubscriptionComandasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionHabitacionesGQL.html" data-type="entity-link" >SubscriptionHabitacionesGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuscripcionEstadoHabitacionService.html" data-type="entity-link" >SuscripcionEstadoHabitacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TarifasGQL.html" data-type="entity-link" >TarifasGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TarifasService.html" data-type="entity-link" >TarifasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TarifasService-1.html" data-type="entity-link" >TarifasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketsService.html" data-type="entity-link" >TicketsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TiposHabitacionsesGQL.html" data-type="entity-link" >TiposHabitacionsesGQL</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilitiesService.html" data-type="entity-link" >UtilitiesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Articulos.html" data-type="entity-link" >Articulos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Concepto.html" data-type="entity-link" >Concepto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Conceptos.html" data-type="entity-link" >Conceptos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Definintion.html" data-type="entity-link" >Definintion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorResponse.html" data-type="entity-link" >ErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormComanda.html" data-type="entity-link" >FormComanda</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/gasto.html" data-type="entity-link" >gasto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/gastos.html" data-type="entity-link" >gastos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Headers.html" data-type="entity-link" >Headers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginErrorResponse.html" data-type="entity-link" >LoginErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModoAppRoomState.html" data-type="entity-link" >ModoAppRoomState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NormalizedNames.html" data-type="entity-link" >NormalizedNames</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Permiso.html" data-type="entity-link" >Permiso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rol.html" data-type="entity-link" >Rol</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Room.html" data-type="entity-link" >Room</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Room-1.html" data-type="entity-link" >Room</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoomsByType.html" data-type="entity-link" >RoomsByType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoomStateCount.html" data-type="entity-link" >RoomStateCount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarifa.html" data-type="entity-link" >Tarifa</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TarifasGroup.html" data-type="entity-link" >TarifasGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketsImpresora.html" data-type="entity-link" >TicketsImpresora</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Tuberías</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CountdownPipe.html" data-type="entity-link" >CountdownPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CutStringPipe.html" data-type="entity-link" >CutStringPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ReplacePipe.html" data-type="entity-link" >ReplacePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TimerPipe.html" data-type="entity-link" >TimerPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Funciones</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Alias de tipo</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});