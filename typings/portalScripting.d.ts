// type definition file for portal scripting on DOCUMENTS 5.0g

/**
 * The AccessProfile class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS access profiles by scripting means.<br><br>
 * A SystemUser can be assigned to an AccessProfile. At the filetype it is possible to define several rights depending on the AccessProfile. You can get an AccessProfile object by different methods like Context.findAccessProfile(String ProfileName) or from the AccessProfileIterator.
 */
declare class AccessProfile {
    /**
     * If an access profile with the profile name already exist, the method return the existing access profile.
     * <br><b>Since:</b>ELC 3.50b / otrisPORTAL 5.0b
     * @param nameAccessProfile
     * @deprecated since ELC 3.60i / otrisPORTAL 6.0i use Context.createAccessProfile() instead
     */
    constructor(nameAccessProfile: string);

    name: string;

    /**
     * 
     * @see [PropertyCache,SystemUser.propCache]{@link PropertyCache,SystemUser#propCache}
     */
    propCache: PropertyCache;

    /**
     * 
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [AccessProfile.setOrAddCustomProperty]{@link AccessProfile#setOrAddCustomProperty}
     * @see [AccessProfile.getCustomProperties]{@link AccessProfile#getCustomProperties}
     */
    addCustomProperty(name: string, type: string, value: string): CustomProperty;

    /**
     * <br><b>Note:</b> This function is only for experts. Knowledge about the ELC-database schema is necessary!
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;

    /**
     * 
     * @param nameFilter String value defining an optional filter depending on the name
     * @param typeFilter String value defining an optional filter depending on the type
     * @returns CustomPropertyIterator
     * @see [context.findCustomProperties]{@link context#findCustomProperties}
     * @see [AccessProfile.setOrAddCustomProperty]{@link AccessProfile#setOrAddCustomProperty}
     * @see [AccessProfile.addCustomProperty]{@link AccessProfile#addCustomProperty}
     */
    getCustomProperties(nameFilter?: string, typeFilter?: string): CustomPropertyIterator;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the AccessProfile object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the AccessProfile object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;

    /**
     * 
     * @returns <code>AccessProfile</code> object representing the parent profile, <code>null</code> if no parent profile exists.
     */
    getParentProfile(): AccessProfile;

    /**
     * 
     * @returns <code>AccessProfileIterator</code> object with the sub-profiles
     */
    getSubProfiles(): AccessProfileIterator;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0c HF2 (new parameters includeLockedUsers and includeInvisibleUsers)
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameters includeSubProfiles)
     * @param includeLockedUsers Optional flag indicating whether locked users also should be returned. The default value is <code>true</code>.
     * @param includeInvisibleUsers Optional flag indicating whether the method also should return users for which the option "Display user in DOCUMENTS lists" in the Documents Manager is not checkmarked. The default value is <code>true</code>.
     * @param includeSubProfiles Optional flag indicating whether the method also should return users which are assigned to the sub-profiles. The default value is <code>false</code>.
     * @returns SystemUserIterator containing a list of SystemUser
     */
    getSystemUsers(includeLockedUsers?: boolean, includeInvisibleUsers?: boolean, includeSubProfiles?: boolean): SystemUserIterator;

    /**
     * <br><b>Note:</b> This function is only for experts. Knowledge about the ELC-database schema is necessary!
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;

    /**
     * This method creates or modifies a unique CustomProperty for the AccessProfile. The combination of the name and the type make the CustomProperty unique for the AccessProfile.
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [AccessProfile.getCustomProperties]{@link AccessProfile#getCustomProperties}
     * @see [AccessProfile.addCustomProperty]{@link AccessProfile#addCustomProperty}
     */
    setOrAddCustomProperty(name: string, type: string, value: string): CustomProperty;

    /**
     * 
     * @param parentProfile optional AccessProfile object being the parent profile of the current profile. If no parent profile is defined, the current profile will be moved to the top level.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setParentProfile(parentProfile: AccessProfile): boolean;

}

/**
 * The objects of this class represent lists of AccessProfile objects and allow to loop through such a list of profiles. The following methods return an AccessProfileIterator: Context.getAccessProfiles(), SystemUser.getAccessProfiles().
 */
declare interface AccessProfileIterator {
    /**
     * 
     * @returns AccessProfile or <code>null</code> in case of an empty AccessProfileIterator
     */
    first(): AccessProfile;
    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * @returns AccessProfile or <code>null</code> if end of AccessProfileIterator is reached.
     */
    next(): AccessProfile;
    /**
     * 
     * @returns integer value with the amount of AccessProfile objects in the AccessProfileIterator
     */
    size(): number;
}

declare interface ArchiveConnection {
    id: string;
    /**
     * With this method you can download an attachment from the EASYWARE ENTERPRISE archive using the XML-Server. The method returns an object of the class <code>ArchiveConnectionBlob</code>. This object allows you to access the attachment. If the method fails the return value is NULL. You can retrieve the error message by executing <code>ArchiveConnection.getLastError()</code>. <br><b>Note:</b> Method is only available for EE.x using XML-Server
     * @param fileKey String containing the key of the file
     * @param docKey String containing the key of the attachment
     * @returns <code>ArchiveConnectionBlob</code> or <code>NULL</code>, if failed
     */
    downloadBlob(fileKey: string, docKey: string): ArchiveConnectionBlob;
    /**
     * This method allows downloading multiple attachments from the EASYWARE ENTERPRISE archive using the XML-Server. The method returns an object of the class <code>ArchiveConnectionBlobIterator</code>. This object allows you to access the attachments. If the method fails the return value is NULL. You can retrieve the error message by executing <code>ArchiveConnection.getLastError()</code>. <br><b>Note:</b> Method is only available for EE.x using XML-Server
     * @param fileKey String Array containing the keys of the files
     * @param docKey String Array containing the keys of the attachments
     * @returns <code>ArchiveConnectionBlobIterator</code> or <code>NULL</code>, if failed
     */
    downloadBlobs(fileKey: string, docKey: string): ArchiveConnectionBlobIterator;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * This method performs a "putblob" request to an installed EASY XML-Server.
     * 
     * <br><b>Note:</b> You may use util.getUniqueId() to create a blobreference. However this may be not unique enough, if several portal servers are connected to the same XML-server in this way.
     * 
     * <br><b>Note:</b> Method is only available for EE.x using XML-Server
     * @param doc The Document object, whose binary content is to be uploaded
     * @param blobreference A unique string, which will identify the content in the XML-Server's blobcache.
     * @returns A boolean value indicates, if the attachment has succeessfully been uploaded.
     */
    putBlob(doc: Document, blobreference: string): boolean;
    /**
     * With this method you can send a query EQL to the XML-Server of EASY ENTERPRISE.x If the method succeed the return value is the response-xml, otherwise it returns NULL. If the value is NULL you can retrieve the error message by executing ArchiveConnection.getLastError()<br><b>Note:</b> Method is only available for EE.x using XML-Server
     * @param eql String containing the EQL
     * @param wantedHits Int with the number of currently wanted hits (optional)
     * @param maxHits Int with the max. number of hits, that the ArchiveConnection should respond (optional)
     * @returns String with the response (xml) or NULL in case of any error
     */
    queryRawEEx(eql: string, wantedHits?: number, maxHits?: number): string;
    /**
     * With this method you can send a GET or a POST request to an EBIS interface. If the request succeeds, the return value is the HTTP-content of the response. Otherwise the function returns an empty String. Call ArchiveConnection.getLastError() subsequently to test for eventual errors. If the interface reports an error, it will be prefixed with "[EBIS] ". <br><b>Note:</b> The function is unable to handle a response with binary data. The function does not check the parameters for illegal characters, such as linefeeds in the extraHeaders, for example.
     * 
     * <br><b>Note:</b> Method is only available for EBIS
     * @param resourceIdentifier String containing the REST resource identifier (in other words: the back part of the URL).
     * @param postData A optional String with content data of a HTTP-POST request. If the parameter is missing or empty, the function generates a GET request.
     * @param extraHeaders A optional Array of Strings with an even number of elements. The first element of each pair must contain the name, the second one the value of an additional HTTP header element.
     * @returns A String with the response. This may be an XML or plain text. It depends on the request.
     */
    sendEbisRequest(resourceIdentifier: string, postData?: string, extraHeaders?: string[]): string;
    /**
     * With this method you can send a request to the XML-Server of EASY ENTERPRISE. If the method succeeds the return value is the response-xml, otherwise it returns NULL. If the value is NULL you can retrieve the error message by executing ArchiveConnection.getLastError()<br><b>Note:</b> Method is only available for EE.x using XML-Server
     * @param request String containing the request
     * @returns an String with the response (xml) or NULL in case of any error
     */
    sendRequest(request: string): string;
}

/**
 * This class holds data like name, extension, size etc. of attachments in the archive. The existance of an object means, that an attachment exists in the archive. If you want to access the attachment (blob) itself in the PortalServer, you have to download the attachment from the archive with the <code>ArchiveConnectionBlob.download()</code> method. Then the attachment will be transferred to the PortalServer machine (localPath). <br><b>Note:</b> You can not create objects of this class. Objects of this class are available only as return value of other functions, e.g. ArchiveConnection.downloadBlob(String fileKey, String docKey).
 * 
 * <br><b>Note:</b> Class is only available for an ArchiceConnection to a XML-Server
 */
declare interface ArchiveConnectionBlob {
    /**
     * This property contains the filesize of the attachment in bytes (83605).
     */
    bytes: number;
    docKey: string;
    /**
     * If the attachment in the archive is locally available at the PortalServer's file system, this value is <code>true</code>.
     */
    downloaded: boolean;
    fileKey: string;
    /**
     * This path is only available if the attribute <code>ArchiveConnectionBlob.downloaded</code> is <code>true</code>
     */
    localPath: string;
    /**
     * This property contains the mime-type of the attachment, e.g image/jpeg.
     */
    mimeType: string;
    name: string;
    /**
     * This property contains the filesize of the attachment in as readable way (81.6 KB).
     */
    size: string;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    download(): boolean;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
}

/**
 * You may access ArchiveConnectionBlobIterator objects by the ArchiveConnection.downloadBlobs() method described in the ArchiceConnection chapter. <br><b>Note:</b> Class is only available for an ArchiceConnection to a XML-Server
 */
declare interface ArchiveConnectionBlobIterator {
    /**
     * 
     * @returns ArchiveConnectionBlob or <code>null</code> in case of an empty ArchiveConnectionBlobIterator
     */
    first(): ArchiveConnectionBlob;
    /**
     * 
     * @returns ArchiveConnectionBlob or <code>NULL</code> if end of ArchiveConnectionBlobIterator is reached
     */
    next(): ArchiveConnectionBlob;
    /**
     * 
     * @returns integer value with the amount of ArchiveConnectionBlob objects in the ArchiveConnectionBlobIterator
     */
    size(): number;
}

/**
 * The ArchiveFileResultset class supports basic functions to loop through a list of ArchiveFile objects.
 */
declare class ArchiveFileResultset {
    /**
     * Like in other programming languages you create a new object with the <code>new</code> operator (refer to example below). <br><b>Note:</b> Important: The resultset may contain less hits than really exist. For EE.i and EE.x the limit of returned hits is the value of the DOCUMENTS property "MaxArchiveHitsFolder". If the property is not set, the limit is the XML-Server's default hit count. For EAS, The limit is either the "MaxArchiveHitsFolder" value or the limit of free research hitlists. The method is the same for dynamic folders and link-registers.
     * @param archiveKey String containing the key of the desired view or archive
     * @param filter String containing an filter criterium; use empty String ('') if you don't want to filter at all
     * @param sortOrder String containing an sort order; use empty String ('') if you don't want to sort at all
     * @param hitlist String containing the hitlist that you want to use (optional für EE.i / mandatory for EE.x
     * @param unlimitedHits boolean that indicates if the archive hit limit must be ignored
     */
    constructor(archiveKey: string, filter: string, sortOrder: string, hitlist: string, unlimitedHits?: boolean);

    /**
     * 
     * @returns DocFile, <code>null</code> in case of an empty ArchiveFileResultset, throws an exception on error loading archive file.
     */
    first(): DocFile;

    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;

    /**
     * 
     * @returns DocFile or <code>null</code> if end of ArchiveFileResultset is reached.
     */
    last(): DocFile;

    /**
     * 
     * @returns DocFile, <code>null</code> if end of ArchiveFileResultset is reached, throws an exception on error loading archive file.
     */
    next(): DocFile;

    /**
     * 
     * @returns integer value with the amount of DocFile objects in the ArchiveFileResultset
     */
    size(): number;

}

declare interface ArchiveServer {
    name: string;
    /**
     * The ArchiveConnection object can be used for low level call directly on the archive interface.
     * @returns <code>ArchiveConnection</code> object if successful, <code>NULL</code> in case of any error
     */
    getArchiveConnection(): ArchiveConnection;
    /**
     * <br><b>Note:</b> This function is only for experts. Knowledge about the DOCUMENTS-database schema is necessary!
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the ArchiveServer object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the ArchiveServer object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * <br><b>Note:</b> This function is only for experts. Knowledge about the DOCUMENTS-database schema is necessary!
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * The settings of the ArchiveServer will be cached in a connection pool to the archive system. The pool does not recognize changes in the ArchiveServer object automatically, therefore it is necessary to call this method after all.
     * @returns
     */
    submitChanges(): void;
}

declare interface ArchiveServerIterator {
    /**
     * 
     * @returns ArchiveServer or <code>null</code> in case of an empty ArchiveServerIterator
     */
    first(): AccessProfile;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * 
     * @returns ArchiveServer or <code>null</code> if end of ArchiveServerIterator is reached.
     */
    next(): AccessProfile;
    /**
     * 
     * @returns integer value with the amount of ArchiveServer objects in the ArchiveServerIterator
     */
    size(): number;
}

/**
 * The ArchivingDescription class has been added to the DOCUMENTS PortalScripting API to improve the archiving process of DOCUMENTS files by scripting means.<br><br>
 * For instance this allows to use different target archives for each file as well as to influence the archiving process by the file's contents itself. The ArchivingDescription object can only be used as parameter for the method DocFile.archive(ArchivingDescription)<br><b>Note:</b> By default, archiving with an ArchivingDescription does not include any attachments. To archive some attachments, the script needs to call addRegister() on this object.
 * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
 * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7
 */
declare class ArchivingDescription {
    /**
     * Like in other programming languages you create a new object with the <code>new</code> operator (refer to example below).
     * <br><b>Since:</b>EE.i: ELC 3.51c / otrisPORTAL 5.1c
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7
     * @see [DocFile.archive]{@link DocFile#archive}
     */
    constructor();

    /**
     * Like on the filetype in the Portal Client you may decide whether you want to archive the monitor of the file along with the file. If so, the file's monitor will be transformed to a HTML file named monitor.html, and it will be part of the archived file in the desired target archive.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7.0
     */
    archiveMonitor: boolean;

    /**
     * You need to define the archive server if you want to archive in an archive server that is different from the main archives server. If you want to archive into the main archive you can leave this value empty.
     * 
     * <br><b>Note:</b> This value has only to be set if you habe multiple archive servers
     */
    archiveServer: string;

    /**
     * Like on the filetype in the Portal Client you may decide whether you want to archive the status of the file along with the file. If so, the file's status will be transformed to a HTML file named status.html, and it will be part of the archived file in the desired target archive.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7
     */
    archiveStatus: boolean;

    /**
     * You need to define the target archive including the "Storageplace". <br><b>Note:</b> This value has only to be set if you want to archive to EE.i. If you want to archive to EE.x, you have to set targetView and targetSchema. It is important to know that the target archive String must use the socalled XML-Server syntax. It is as well neccessary to use a double backslash (\\) if you define your target archive as an PortalScript String value, because a single backslash is a special character.
     */
    targetArchive: string;

    /**
     * You need to define the target schema you want to archive into. <br><b>Note:</b> This value has only to be set if you want to archive to EE.x.
     */
    targetSchema: string;

    /**
     * You need to define the target view (write pool) you want to archive into. <br><b>Note:</b> This value has only to be set if you want to archive to EE.x.
     */
    targetView: string;

    /**
     * If the DocFile has already been archived and if you define this attribute to be true, a new version of the archive file will be created otherwise a independent new file in the archive will be created.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7
     */
    versioning: boolean;

    /**
     * You may add the technical names of different document registers to an internal list of your ArchivingDescription object. This allows for example to archive only part of your documents of your DocFile.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: ELC 4.0 / otrisPORTAL 7
     * @param registerName String containing the technical name of the register to be archived. Pass "all_docs" to archive all attachments of your DocFile.
     * @returns
     */
    addRegister(registerName: string): void;

}

/**
 * There is exactly ONE implicit object of the class <code>Context</code> which is named <code>context</code>. The implicit object <code>context</code> is the root object in any script. With the <code>context</code> object you are able to access to the different DOCUMENTS objects like DocFile, Folder etc. Some of the attributes are only available under certain conditions. It depends on the execution context of the PortalScript, whether a certain attribute is accessible or not. For example, <code>context.selectedFiles</code> is available in a folder userdefined action script, but not in a script used as a signal exit. <br><b>Note:</b> It is not possible to create objects of the class Context, since the context object is always available.
 */
declare namespace context {
    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_INVOICE: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_FP_HENR: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_LDAP: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CONTRACT: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_OUTLOOK_WEB: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_OUTLOOK_SYNC: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_WORDML: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_MOBILE: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_BUSINESS_UNITS: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CONTROLLING: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_REPORTING: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_EASYHR: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CONTRACT_SAP: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_GADGETS: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_INBOX: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_IMS: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CGC: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CGC_ENT: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CGC_ENT_PLUS: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_CREATOR: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_DOC_TREE: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_RISK_MANAGEMENT: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_IFRS16: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_SIGN: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_IP_MANAGEMENT: number;

    /**
     * <br> This constant is member of constant group: PEM Module Constants<br>
     * These constants build an enumeration of the possible values of the pem license.
     */
    var PEM_MODULE_DROP: number;

    var actionName: string;

    /**
     * This property is helpful to identify the clients at scripts running concurrently (for debugging purposes).
     */
    var clientId: string;

    /**
     * If the script is running e.g. as action in the workflow the user is the logged in user, who has initiated the action.
     */
    var currentUser: string;

    /**
     * <br><b>Note:</b> If the script is not executed in a document context then the return value is null.
     */
    var document: Document;

    /**
     * The error message will be displayed as Javascript alert box in the web client if the script is called in context of a web client. <br><b>Note:</b> You can get and set this property.
     */
    var errorMessage: string;

    /**
     * According to the context where the portal script has been called this property contains a key name for this event.
     * 
     * 
     * The following events are available:
     * <ul>
     * <li><code>"afterMail"</code></li>
     * <li><code>"afterSave"</code></li>
     * <li><code>"attributeSetter"</code></li>
     * <li><code>"autoText"</code></li>
     * <li><code>"condition"</code></li>
     * <li><code>"custom"</code></li>
     * <li><code>"fileAction"</code></li>
     * <li><code>"folderAction"</code></li>
     * <li><code>"moveTrash"</code></li>
     * <li><code>"newFile"</code></li>
     * <li><code>"onAutoLogin"</code></li>
     * <li><code>"onArchive"</code></li>
     * <li><code>"onDelete"</code></li>
     * <li><code>"onDeleteAll"</code></li>
     * <li><code>"onEdit"</code></li>
     * <li><code>"onLogin"</code></li>
     * <li><code>"onSave"</code></li>
     * <li><code>"test"</code></li>
     * <li><code>"workflow"</code></li>
     * </ul>
     */
    var event: string;

    /**
     * If the script is an enumeration script, this member contains the field name of the current field where the script is executed. This is particularly helpful when the script is set at more than one enumeration field and the behaviour of the script should depend on the field.
     */
    var fieldName: string;

    /**
     * <br><b>Note:</b> If the script is not executed in a file context then the return value is null.
     */
    var file: DocFile;

    /**
     * This property contains the technical name of the filetype of the file which is the execution context of the script.
     * @see [context.file]{@link context#file}
     */
    var fileType: string;

    var folder: Folder;

    /**
     * This property allows to retrieve a list of all files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.
     * <br><b>Note:</b> If there is no file inside the folder you will receive a valid empty FileResultset.
     */
    var folderFiles: FileResultset;

    /**
     * This property contains the technical name of the folder which is the execution context of the script.
     */
    var folderName: string;

    var qsession: string;

    /**
     * <br><b>Note:</b> If the script is not executed in a register context then the return value is null.
     */
    var register: Register;

    /**
     * The following list shows all available types.
     * <table border=1 cellspacing=0>
     * <tr><td><b>returnType</b></td><td><b>return Value</b></td><td><b>Description</b></td></tr>
     * <tr><td><code>"stay"</code></td><td></td><td>Default behaviour. Show current file.  </td></tr>
     * <tr><td><code>"updateFile"</code></td><td></td><td>Show and update current file.  </td></tr>
     * <tr><td><code>"html"</code></td><td><b>HTML</b></td><td>Show the <b>HTML</b></td></tr>
     * <tr><td><code>"htmlpopup"</code></td><td><b>HTML</b></td><td>Show the <b>HTML</b> in a dialog  </td></tr>
     * <tr><td><code>"showFile"</code></td><td><b>fileId[</b><code>&dlcRegisterId=</code><b>registerId]</b></td><td>Show the file  </td></tr>
     * <tr><td><code>"showEditFile"</code></td><td><b>fileId</b></td><td>Open the file in edit mode  </td></tr>
     * <tr><td><code>"showNewFile"</code></td><td><b>fileId</b></td><td>Open the file in edit mode and delete it on cancellation  </td></tr>
     * <tr><td><code>"showFolder"</code></td><td><b>folderId</b></td><td>Show the folder  </td></tr>
     * <tr><td><code>"updateTree"</code></td><td><b>folderId</b></td><td>Show and update the folder  </td></tr>
     * <tr><td><code>"file:filename"</code></td><td><b>folderId</b></td><td>Ask the user, if they want to download the content of the return value (usually a String variable). The filename <code>filename</code> will be proposed as a default.  </td></tr>
     * <tr><td><code>"download:filename"</code></td><td><b>folderId</b></td><td>Ask the user, if they want to download the blob, that is specified in the return value (server-sided path to the blob). The filename <code>filename</code> will be proposed as a default.  </td></tr>
     * <tr><td><code>"checkoutDocuments"</code></td><td><code>{"fileId": "","registerId": "","documentId": "","openLocal": false}</code></td><td>Checkout document and open it in edit mode  </td></tr>
     * <tr><td><code>"clientScript"</code></td><td><b>JavaScript</b> code </td><td>Execute the code  </td></tr>
     * <tr><td><code>"destroyHitTree"</code></td><td></td><td>Remove current <b>HitTree</b> from server cache. So after logout the <b>HitTree</b> won't be available anymore.  </td></tr>
     * <tr><td><code>"gadget"</code></td><td>Example: <code>{gadgetScript:"Gadget_SimpleSample", gadgetAction: "initGadget"}</code></td><td>Show <b>Gadget</b> in dialog  </td></tr>
     * <tr><td><code>"hitTree"</code></td><td></td><td>Show <b>HitTree</b> outbar  </td></tr>
     * <tr><td><code>"openOutbar"</code></td><td>Technical name of an outbar </td><td>Show the outbar  </td></tr>
     * <tr><td><code>"openAndReloadOutbar"</code></td><td>Technical name of an outbar </td><td>Show and reload the outbar  </td></tr>
     * <tr><td><code>"refreshFolder"</code></td><td><code>{folderId: "", selectedHit: ""}</code></td><td>Refresh folder with id <code>folderId</code> or current folder if not set. The file in <code>selectedHit</code> will be selected.  </td></tr>
     * <tr><td><code>"refreshScriptList"</code></td><td></td><td>Refresh scriptlist by executing the referenced script.  </td></tr>
     * <tr><td><code>"scriptList"</code></td><td>Created scriptlist as JSON string </td><td>Show the scriptlist  </td></tr>
     * <tr><td><code>"treeChart"</code></td><td>Treechart as JSON string </td><td>Show the treechart  </td></tr>
     * <tr><td><code>"multipleAction"</code></td><td>Example: <code>[{returnType: 'showFile', returnValue : fileId}, {returnType: 'html', returnValue : 'HTML-Code'}]</code></td><td>Execute all actions set in array  </td></tr>
     * </table>
     * 
     * 
     * <br><b>Note:</b> You may read from and write to this property. For further information and examples see "HowTo-Sammlung" on otris.software.
     * <br><b>Since:</b>DOCUMENTS 4.0c showFile with return value of file-id and register-id
     */
    var returnType: string;

    var scriptName: string;

    /**
     * This property allows to retrieve a list of the selected archive files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.
     * <br><b>Note:</b> If there is no file selected you will receive a valid empty ArchiveFileResultset.
     */
    var selectedArchiveFiles: ArchiveFileResultset;

    /**
     * This property allows to retrieve an array with the keys of the selected archive files of a folder if this script is run as user defined action at the folder. <br><b>Note:</b> If there is no archive file selected you will receive a valid empty array.
     */
    var selectedArchiveKeys: string[];

    /**
     * This property allows to retrieve a list of all selected Documents of a register if this script is run as user defined action at the register. <br><b>Note:</b> If there is no document inside the Register you will receive a valid empty DocumentIterator.
     */
    var selectedDocuments: DocumentIterator;

    /**
     * This property allows to retrieve a list of the selected files of a folder if this script is run as user defined action at the folder. You can then iterate through this list for further use of the distinct files.
     * <br><b>Note:</b> If there is no file selected you will receive a valid empty FileResultset.
     */
    var selectedFiles: FileResultset;

    /**
     * This property is useful for debugging purposes, if you need to have a look for a certain line of code to find an error, but the script contains other imported sub scripts which mangle the line numbering.
     */
    var sourceCode: string;

    var workflowActionId: string;

    var workflowActionName: string;

    var workflowControlFlowId: string;

    var workflowControlFlowName: string;

    /**
     * E.g. as guard or decision script.
     */
    var workflowStep: WorkflowStep;

    /**
     * 
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [context.setOrAddCustomProperty]{@link context#setOrAddCustomProperty}
     * @see [context.getCustomProperties]{@link context#getCustomProperties}
     */
    function addCustomProperty(name: string, type: string, value: string): CustomProperty;

    /**
     * Since date manipulation in Javascript is odd sometimes, this useful function allows to conveniently add a given period of time to a given date, e.g. to calculate a due date based upon the current date plus <code>xx</code> days
     * @param ts Date object to which the period of time should be added
     * @param amount integer value of the period of time to be added
     * @param unit String value representing the time unit of the period of time. You may use one of the following unit values:
     *        <ul>
     *        <li><code>"minutes"</code></li>
     *        <li><code>"hours"</code></li>
     *        <li><code>"days"</code></li>
     *        <li><code>"weeks"</code></li>
     *        </ul>
     * @param useWorkCalendar <code>true</code> if work calendar should be taken into account, <code>false</code> if not. The work calendar has to be defined at Documents->Settings
     * @returns Date object with the new date.
     * @see [context.getDatesDiff]{@link context#getDatesDiff} [util.convertDateToString]{@link util#convertDateToString} [util.convertStringToDate]{@link util#convertStringToDate}
     */
    function addTimeInterval(ts: Date, amount: number, unit?: string, useWorkCalendar?: boolean): Date;

    /**
     * In some cases, especially if you make heavy use of access privileges both with files and file fields, it might be neccessary to run a script in a different user context than the user who triggered the script execution. For example, if the current user is not allowed to change any field values, a PortalScript running in this user's context will fail, if it tries to change a field value. In this case it is best practice to switch the user context to some superuser who is allowed to perform the restricted action before that restricted action is executed. You may change the script's user context as often as you need, a change only applies to the instructions following the changeScriptUser() call.
     * @param login String value containing the login name of the user to switch to
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    function changeScriptUser(login: string): boolean;

    /**
     * 
     * @param scriptName String with the name of the PortalScript
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    function clearEnumvalCache(scriptName: string): boolean;

    /**
     * The output String is in the date format of the specified locale. If you leave the locale parameter away the current locale of the script context will be used.
     * @param dateOrTimeStamp Date/Timestamp object representing the desired date
     * @param locale
     * @returns
     * @see [util.convertDateToString]{@link util#convertDateToString}
     */
    function convertDateToString(dateOrTimeStamp: Date, locale?: string): string;

    /**
     * The output String may have any format you like. The parameters can be used to configure the format of the numeric String.
     * @param value Numeric object representing the number
     * @param decimalSep Decimal-Separator as String
     * @param thousandSep Thousend-Separator as String
     * @param precision Precision as number (default=2)
     * @returns String representing the desired number
     * @see [context.convertNumericToString]{@link context#convertNumericToString}
     */
    function convertNumericToString(value: number, decimalSep: string, thousandSep: string, precision?: number): string;

    /**
     * The output String is formatted like the definition in the locale. If the locale is not defined by parameter, the locale of the current user will be used.
     * @param value Numeric object representing the number
     * @param locale Locale as String
     * @param precision
     * @returns String representing the desired number
     * @see [context.convertNumericToString]{@link context#convertNumericToString}
     */
    function convertNumericToString(value: number, locale?: string, precision?: number): string;

    /**
     * The output Date is in the date format of the specified locale. If you omit the locale parameter the current locale of the script context will be used.
     * @param dateOrTimeStamp String representing a date has to be formatted as the definition in the specified locale, e.g. "TT.MM.JJJJ" for the locale "de".
     * @param locale Optional String value with the locale abbreviation (according to the principal's configuration).
     * @returns
     * @see [util.convertStringToDate]{@link util#convertStringToDate}
     */
    function convertStringToDate(dateOrTimeStamp: string, locale: string): Date;

    /**
     * The input String may have any format you like. The following parameters defines the format to configure the format of the numeric String.
     * @param numericValue Formatted numeric String
     * @param decimalSep Decimal-Separator as String
     * @param thousandSep Thousend-Separator as String
     * @returns the numeric number (float) or NULL if fail
     * @see [context.convertStringToNumeric]{@link context#convertStringToNumeric}
     */
    function convertStringToNumeric(numericValue: string, decimalSep: string, thousandSep: string): number;

    /**
     * The input String has to be formatted like the definition in the locale. If the locale is not defined by parameter, the locale of the current user will be used.
     * @param numericValue Formatted numeric String
     * @param locale Locale as String
     * @returns the numeric number (float) or NULL if fail
     * @see [context.convertStringToNumeric]{@link context#convertStringToNumeric}
     */
    function convertStringToNumeric(numericValue: string, locale?: string): number;

    /**
     * 
     * @param sourceFileTypeName String containing the technical name of the file type to be copied.
     * @param targetFileTypeName Optional String containing the technical name of the file type copy. The default value is the <code>sourceFileTypeName</code> with the suffix "_copy".
     * @param released Optional boolean indicating whether the copied file type should be released. The default value is <code>true</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    function copyFileType(sourceFileTypeName: string, targetFileTypeName: string, released: boolean): boolean;

    /**
     * <br><b>Note:</b> This function is only for experts.
     * @param fileType the technical name of the desired filetype
     * @returns Integer amount of pool files
     * @see [context.createPoolFile]{@link context#createPoolFile}
     */
    function countPoolFiles(fileType: string): number;

    /**
     * If the access profile already exist, the method returns an error.
     * @param profileName technical name of the access profile
     * @returns AccessProfile object as a representation of the access profile in DOCUMENTS, <code>null</code> in case of any error
     */
    function createAccessProfile(profileName: string): AccessProfile;

    /**
     * This function creates a new ArchiveServer for the specified archive software on the top level. These types are available:
     * <ul>
     * <li><code>EEI</code></li>
     * <li><code>EEX_native</code></li>
     * <li><code>EBIS_store</code></li>
     * <li><code>NOAH</code></li>
     * <li><code>None</code></li>
     * </ul>
     * @param name The technical name of the ArchiveServer to be created.
     * @param type The desired archive software of the ArchiveServer.
     * @returns New created ArchiveServer object or <code>null</code> if failed.
     */
    function createArchiveServer(name: string, type: string): ArchiveServer;

    /**
     * <br><b>Note:</b> The license type "shared" is only available for pure archive retrieval users. It is not possible to create a shared user with DOCUMENTS access!
     * <br><b>Since:</b>DOCUMENTS 4.0d HF3 / DOCUMENTS 5.0 (new licenseType "concurrent_standard", "concurrent_open")
     * @param loginName login of the fellow
     * @param isDlcUser automatically grant DOCUMENTS access (true/false)
     * @param licenseType optional definition of the license type for that user (allowed values are <code>"named"</code>, <code>"concurrent_standard"</code>, <code>"concurrent_open"</code> and <code>"shared"</code> (deprecated: <code>"concurrent"</code>)
     * @returns SystemUser object as a representation of the newly created fellow; if the creation fails (e.g. due to a lack of appropriate licenses), the method returns <code>null</code>
     * @see [context.deleteSystemUser]{@link context#deleteSystemUser}
     */
    function createFellow(loginName: string, isDlcUser: boolean, licenseType?: string): SystemUser;

    /**
     * This function creates a new file of the given filetype. Since the script is executed in the context of a particular user, it is mandatory that user possesses sufficient access privileges to create new instances of the desired filetype, otherwise the method will fail.
     * 
     * If an error occurs during creation of the file the return value will be <code>null</code> and you can access an error message describing the error with getLastError(). <br><b>Note:</b>  DOCUMENTS 5.0c HF1 and newer:  The function directly creates a file for an EAS or EBIS store, if "@server" has been appended to the filetype's name and if appropriate permissions are granted. In this case the returned DocFile must be saved with DocFile.commit() instead of DocFile.sync().
     * <br><b>Since:</b>DOCUMENTS 5.0c HF1 (support for EDA/EAS and EBIS stores)
     * @param fileType Name of the filetype
     * @param jsonDefaultData optional json-String with an object with default-values for the fields of the created file
     * @returns New created file as DocFile object or <code>null</code> if failed.
     */
    function createFile(fileType: string, jsonDefaultData?: string): DocFile;

    /**
     * This function creates a new folder of the specified type on the top level. There are three types available:
     * <ul>
     * <li><code>public</code></li>
     * <li><code>dynamicpublic</code></li>
     * <li><code>onlysubfolder</code></li>
     * </ul>
     * @param name The technical name of the folder to be created.
     * @param type The desired type of the folder.
     * @returns New created folder as Folder object or <code>null</code> if failed.
     */
    function createFolder(name: string, type: string): Folder;

    /**
     * The script must run in the context of a user who has sufficient access privileges to create new files of the specified filetype, otherwise this method will fail.
     * @param fileType the technical name of the desired filetype
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.countPoolFiles]{@link context#countPoolFiles}
     */
    function createPoolFile(fileType: string): boolean;

    /**
     * <br><b>Note:</b> The license type "shared" is only available for pure archive retrieval users. It is not possible to create a shared user with DOCUMENTS access!
     * <br><b>Since:</b>DOCUMENTS 4.0d HF3 / DOCUMENTS 5.0 (new licenseType "concurrent_standard", "concurrent_open")
     * @param loginName login of the user
     * @param isDlcUser automatically grant DOCUMENTS access (true/false)
     * @param licenseType optional definition of the license type for that user (allowed values are <code>"named"</code>, <code>"concurrent"</code> and <code>"shared"</code>)
     * @returns SystemUser object as a representation of the newly created user; if the creation fails (e.g. due to a lack of appropriate licenses), the method returns <code>null</code>
     * @see [context.deleteSystemUser]{@link context#deleteSystemUser}
     */
    function createSystemUser(loginName: string, isDlcUser: boolean, licenseType?: string): SystemUser;

    /**
     * 
     * @param profileName technical name of the access profile
     * @returns <code>true</code> in case of successful deletion, <code>false</code> in case of any error
     */
    function deleteAccessProfile(profileName: string): boolean;

    /**
     * 
     * @param folderObj an object of the Class Folder which represents the according folder in DOCUMENTS
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    function deleteFolder(folderObj: Folder): boolean;

    /**
     * 
     * @param loginName login of the user
     * @returns <code>true</code> if the deletion was successful, <code>false</code> in case of any error
     * @see [context.createSystemUser]{@link context#createSystemUser}
     */
    function deleteSystemUser(loginName: string): boolean;

    /**
     * 
     * @param operationName String with the name of the maintenance operation
     * @returns <code>String</code> with the return message of the of the maintenance operation.
     */
    function doMaintenance(operationName: string): string;

    /**
     * This function defines a function named <code>require()</code>, either in a passed object or in the global scope of the calling script. In sequence <code>require</code>('<scriptname>') can be used to import other portal scripts, which are implemented in the style of Node.js modules. <br><b>Note:</b> Usually only top-level scripts call enableModules(). They should call it only once. Scripts loaded by require() always see the function as a global parameter. DOCUMENTS exposes a generic 'module' and an initially empty 'exports' object to each imported script. Other features of the module concept of Node.js are not available.
     * 
     * 
     * To customize the behaviour of the require() function the following flags may be set. (Use one of the operators '|' or '+' to combine multiple flags.)
     * <ul>
     * <li>1 = ignore ".js" or ".JS" extensions appended to the passed script name</li>
     * <li>2 = ignore file paths prepended to the script name</li>
     * </ul>
     * 
     * The require() implementation saves the flags passed to enableModules() before a new module is loaded. It restores them afterwards. This allows local overrides of the import flags, as shown in the second example. However, if require() is called directly or indirectly from an exported function, local flag overrides generally do not work. When the importing script calls the exported function, the embedded call of require() occurs with the flags set by the importing script, not with the modules's local flags.
     * <br><b>Since:</b>DOCUMENTS 5.0f (flags parameter)
     * @param root An optional Object to define the require() function as a property. Use this parameter, if the name "require" is already reserved in the script's global namespace.
     * @param flags An optional integer number containing a bit mask with special options. Defaults to 0.
     * @returns undefined.
     */
    function enableModules(root?: Object, flags?: number): void;

    /**
     * In the context of a work directory, an external command shell call is executed, usually a batch file. You can decide whether the scripting engine must wait for the external call to complete or whether the script execution continues asynchonously. If the script waits for the external call to complete, this method returns the errorcode of the external call as an integer value.
     * @param workDir String containing a complete directory path which should be used as the working directory
     * @param cmd String containing the full path and filename to the batch file which shall be executed
     * @param synced boolean value which defines whether the script must wait for the external call to finish (<code>true</code>) or not (<code>false</code>)
     * @returns number containing the errorcode (ERRORLEVEL) of the batch call
     */
    function extCall(workDir: string, cmd: string, synced: boolean): number;

    /**
     * An external process call is executed, e.g. a batch file. The methods returns an array of the size 2. The first array value is the exit code of the external process. The second array value contains the content that the external process has written to the standard output.
     * @param cmd String containing the full path and filename to the program which shall be executed
     * @returns a string array with the exit code and the content of the standard output
     */
    function extProcess(cmd: string): string[];

    /**
     * 
     * @param profileName technical name of the access profile
     * @returns AccessProfile object as a representation of the access profile in DOCUMENTS, <code>null</code> in case of any error
     */
    function findAccessProfile(profileName: string): AccessProfile;

    /**
     * 
     * @param filter Optional String value defining the search filter (specification see example)
     * @returns CustomPropertyIterator
     * @see [context.getCustomProperties]{@link context#getCustomProperties}
     * @see [AccessProfile.getCustomProperties]{@link AccessProfile#getCustomProperties}
     * @see [SystemUser.getCustomProperties]{@link SystemUser#getCustomProperties}
     */
    function findCustomProperties(filter: string): CustomPropertyIterator;

    /**
     * If the user does not exist, then the return value will be <code>null</code>.
     * @param login name of the user
     * @returns User as SystemUser object
     * @see [context.findSystemUserByAlias]{@link context#findSystemUserByAlias} [context.getSystemUser]{@link context#getSystemUser} [context.getSystemUsers]{@link context#getSystemUsers} [AccessProfile.getSystemUsers]{@link AccessProfile#getSystemUsers}
     */
    function findSystemUser(login: string): SystemUser;

    /**
     * If the alias does not exist or is not connected to a user then the return value will be <code>null</code>.
     * @param alias technical name of the desired alias
     * @returns User as SystemUser object
     * @see [context.findSystemUser]{@link context#findSystemUser} [context.getSystemUser]{@link context#getSystemUser} [context.getSystemUsers]{@link context#getSystemUsers}
     */
    function findSystemUserByAlias(alias: string): SystemUser;

    /**
     * <br><b>Note:</b> This method can only return access profiles which are checkmarked as being visible in DOCUMENTS lists.
     * <br><b>Since:</b>ELC 3.60e / otrisPORTAL 6.0e (new parameter includeInvisibleProfiles)
     * @param includeInvisibleProfiles optional boolean value to define, if access profiles that are not checkmarked as being visible in DOCUMENTS lists should be included
     * @returns AccessProfileIterator object with all AccessProfile in DOCUMENTS
     */
    function getAccessProfiles(includeInvisibleProfiles?: boolean): AccessProfileIterator;

    /**
     * With this method you can get an ArchiveConnection object. This object offers several methods to use the EAS Interface, EBIS or the EASY ENTERPRISE XML-Server.
     * @param archiveServerName Optional string containing the archive server name; If the archive server is not defined, then the main archive server will be used
     * @returns ArchiveConnection-Object or NULL, if failed
     * @see [ArchiveServer.getArchiveConnection]{@link ArchiveServer#getArchiveConnection}
     */
    function getArchiveConnection(archiveServerName: string): ArchiveConnection;

    /**
     * With this method you can get a file from the archive using the archive key. You need the necessary access rights on the archive side.
     * @param key
     * @returns <code>DocFile</code> or <code>NULL</code>, if failed
     */
    function getArchiveFile(key: string): DocFile;

    /**
     * 
     * @param name The technical name of the ArchiveServer.
     * @returns ArchiveServer object or <code>null</code> if failed.
     */
    function getArchiveServer(name: string): ArchiveServer;

    /**
     * 
     * @returns
     */
    function getArchiveServers(): ArchiveServerIterator;

    /**
     * 
     * @param autoText the rule to be parsed
     * @returns String containing the parsed value of the autotext
     */
    function getAutoText(autoText: string): string;

    /**
     * If you want to return output messages through scripting, taking into account that your users might use different portal languages, this function is useful to gain knowledge about the portal language used by the current user, who is part of the script's runtime context. This function returns the current language as the two letter abbreviation as defined in the principal's settings in the Windows Portal Client (e.g. "de" for German).
     * @returns String containing the abbreviation of the current user's portal language
     * @see [context.setClientLang]{@link context#setClientLang} [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getClientLang(): string;

    /**
     * 
     * @returns integer value of the index of the current system language
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getClientSystemLang(): number;

    /**
     * You can analyze the connection info to identify e.g. a client thread of the HTML5 Web-Client
     * 
     * ```
     * HTML5-Client:   CL[Windows 7/Java 1.7.0_76], POOL[SingleConnector], INF[SID[ua:docsclient, dca:2.0, docs_cv:5.0]]
     * Classic-Client: CL[Windows 7/Java 1.7.0_76], POOL[SingleConnector]
     * SOAP-Client:    Documents-SOAP-Proxy (In-Server-Client-Library) on Win32
     * ```
     * @returns String containing the connection info
     */
    function getClientType(): string;

    /**
     * 
     * @param attributeName the technical name of the desired attribute
     * @returns String containing the value of the attribute
     * @see [context.getPrincipalAttribute]{@link context#getPrincipalAttribute} [context.setPrincipalAttribute]{@link context#setPrincipalAttribute}
     */
    function getCurrentUserAttribute(attributeName: string): string;

    /**
     * 
     * @param nameFilter String value defining an optional filter depending on the name
     * @param typeFilter String value defining an optional filter depending on the type
     * @returns CustomPropertyIterator
     * @see [context.findCustomProperties]{@link context#findCustomProperties}
     * @see [context.setOrAddCustomProperty]{@link context#setOrAddCustomProperty}
     * @see [context.addCustomProperty]{@link context#addCustomProperty}
     */
    function getCustomProperties(nameFilter?: string, typeFilter?: string): CustomPropertyIterator;

    /**
     * This function calculates the time difference between two Date objects, for example if you need to know how many days a business trip takes. By default this function takes the work calendar into account if it is configured and enabled for the principal.
     * @param earlierDate Date object representing the earlier date
     * @param laterDate Date object representing the later date
     * @param unit optional String value defining the unit, allowed values are <code>"minutes"</code>, <code>"hours"</code> and <code>"days"</code> (default)
     * @param useWorkCalendar optional boolean to take office hours into account or not (requires enabled and configured work calendar)
     * @returns integer value representing the difference between the two dates
     */
    function getDatesDiff(earlierDate: Date, laterDate: Date, unit?: string, useWorkCalendar?: boolean): number;

    /**
     * If the Document does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be <code>null</code>.
     * @param idFile Unique id of the file
     * @param idDocument Unique id of the document
     * @returns Document as Document object.
     */
    function getDocumentById(idFile: string, idDocument: string): Document;

    /**
     * 
     * @param fileTypeName String containing the technical name of the file type.
     * @param templateName String containing the technical name of the document template.
     * @param content Optional boolean indicating whether the path of the template file is wanted or the content of the file as String.
     * @returns <code>String</code> with the path to the template or the content of the template, an exception in case of any error
     */
    function getDocumentTemplateFromFileType(fileTypeName: string, templateName: string, content?: boolean): string;

    /**
     * 
     * @param autoText to be parsed
     * @returns Array containing the values for the autotext
     */
    function getEnumAutoText(autoText: string): string[];

    /**
     * Enumeration lists in multilanguage DOCUMENTS installations usually are translated into the different portal languages as well. This results in the effect that only a technical value for an enumeration is stored in the database. So, if you need to display the label which is usually visible instead in the enumeration field through scripting, this function is used to access that ergonomic label.
     * @param fileType String value containing the technical name of the desired filetype
     * @param field String value containing the technical name of the desired enumeration field
     * @param techEnumValue String value containing the desired technical value of the enumeration entry
     * @param locale optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically
     * @returns String containing the ergonomic value of the enumeration value in the appropriate portal language
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getEnumErgValue(fileType: string, field: string, techEnumValue: string, locale?: string): string;

    /**
     * In some cases it might be useful not only to access the selected value of an enumeration file field, but the list of all possible field values as well. This function creates an Array of String values (zero-based), and each index is one available value of the enumeration field. If the enumeration field is configured to sort the values alphabetically, this option is respected.
     * @param fileType String value containing the technical name of the desired filetype
     * @param field String value containing the technical name of the desired enumeration field
     * @returns Array containing all possible values of the enumeration field
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getEnumValues(fileType: string, field: string): string;

    /**
     * In multilanguage DOCUMENTS environments, usually the file fields are translated to the different locales by using the well known ergonomic label hack. The function is useful to output scripting generated information in the appropriate portal language of the web user who triggered the script execution.
     * @param fileType String value containing the technical name of the desired filetype
     * @param field String value containing the technical name of the desired field
     * @param locale optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically
     * @returns String containing the ergonomic description of the file field in the appropriate portal language
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getFieldErgName(fileType: string, field: string, locale?: string): string;

    /**
     * If the file does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be <code>null</code>.
     * @param idFile Unique id of the file
     * @returns File as DocFile object.
     * @see [context.file]{@link context#file}
     */
    function getFileById(idFile: string): DocFile;

    /**
     * In multilanguage DOCUMENTS environments, usually the filetypes are translated to the different locales by using the well known ergonomic label hack. The function is useful to output scripting generated information in the appropriate portal language of the web user who triggered the script execution.
     * @param fileType String value containing the technical name of the desired filetype
     * @param locale optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically
     * @returns String containing the ergonomic description of the filetype in the appropriate portal language
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getFileTypeErgName(fileType: string, locale?: string): string;

    /**
     * 
     * @param nameFiletype String value containing the technical name of the filetype.
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the filetype object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the filetype object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id or <code>false</code> if filetype does not exist
     */
    function getFileTypeOID(nameFiletype: string, oidLow?: boolean): string;

    /**
     * This method can be used to get the position of a top level folder (public, public dynamic or only subfolders folder with no parent) in the global context.
     * @param folder Folder object whose position to be retrieved.
     * @returns internal position number of the folder as integer or -1 in case of any error.
     * @see [context.setFolderPosition]{@link context#setFolderPosition} [Folder.getPosition]{@link Folder#getPosition} [Folder.setPosition]{@link Folder#setPosition}
     */
    function getFolderPosition(folder: Folder): number;

    /**
     * Different folders might match an identical pattern, e.g. <code>"DE_20*"</code> for each folder like <code>"DE_2004"</code>, <code>"DE_2005"</code> and so on. If you need to perform some action with the different folders or their contents, it might be useful to retrieve an iterator (a list) of all these folders to loop through that list.
     * @param folderPattern the name pattern of the desired folder(s)
     * @param type optional parameter, a String value defining the type of folders to look for; allowed values are <code>"public"</code>, <code>"dynamicpublic"</code> and <code>"onlysubfolder"</code>
     * @returns FolderIterator containing a list of all folders matching the specified name pattern
     */
    function getFoldersByName(folderPattern: string, type?: string): FolderIterator;

    /**
     * It might be inconvenient to maintain the different output Strings of localized PortalScripts, if this requires to edit the scripts themselves. This function adds a convenient way to directly access the system messages table which you may maintain in the Windows Portal Client. This enables you to add your own system message table entries in your different portal languages and to directly access them in your scripts.
     * @param identifier String value containing the technical identifer of a certain system message table entry
     * @returns String containing the value of the desired entry in the current user's portal language
     * @see [context.getEnumErgValue]{@link context#getEnumErgValue} [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName} [context.getEnumValues]{@link context#getEnumValues} [context.getFromSystemTable]{@link context#getFromSystemTable}
     */
    function getFromSystemTable(identifier: string): string;

    /**
     * 
     * @param attributeName The name of the desired attribute
     * @returns String with the value of the attribute, an exception in case of using an invalid attribute and an empty string in case of using a not existing property starting with '$', respectively.
     * @see [context.setGlobalAttribute]{@link context#setGlobalAttribute}
     */
    function getGlobalAttribute(attributeName: string): string;

    /**
     * With this method you can get a JS-Object by the object id. Depending of the class of the object you get a JS-Object of the classes AccessProfile, DocFile, Document, Folder, Register, SystemUser or WorkflowStep
     * @param oid String containing the id of the object
     * @returns JS-Object or NULL, if failed
     */
    function getJSObject(oid: string): object;

    /**
     * <br><b>Note:</b> All classes have their own error functions. Only global errors are available through the context getLastError() method.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    function getLastError(shortMessage?: boolean): string;

    /**
     * 
     * @param value String with the complete value string
     * @param locale Optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically.
     * @returns <code>String</code> containing the valuein the appropriate portal language.
     */
    function getLocaleValue(value: string, locale?: string): string;

    /**
     * 
     * @param attributeName the technical name of the desired attribute
     * @returns String containing the value of the attribute
     * @see [context.getCurrentUserAttribute]{@link context#getCurrentUserAttribute} [context.setPrincipalAttribute]{@link context#setPrincipalAttribute}
     */
    function getPrincipalAttribute(attributeName: string): string;

    /**
     * 
     * @returns String with the value of the status
     * @see [context.setPrincipalStatus]{@link context#setPrincipalStatus}
     */
    function getPrincipalStatus(): string;

    /**
     * 
     * @returns <code>progress</code> as float (value >= 0 and value <= 100)
     * @see [context.setProgressBarText]{@link context#setProgressBarText} [context.setProgressBar]{@link context#setProgressBar}
     */
    function getProgressBar(): number;

    /**
     * <br><b>Note:</b> The return value is null, if the calling script is not running as an "OnSearch" or "FillSearchMask" handler. It can also be null, if the script has called changeScriptUser(). In order to access the search parameters, the script needs to restore the original user context.
     * @returns A DocQueryParams object on success, otherwise <code>null</code>.
     */
    function getQueryParams(): DocQueryParams;

    /**
     * 
     * @param fileTypeName String value containing the technical name of the desired filetype
     * @param registerName String value containing the technical name of the desired register
     * @param locale optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically
     * @returns String containing the ergonomic description of the register in the appropriate portal language
     * @see [context.getFieldErgName]{@link context#getFieldErgName} [context.getFileTypeErgName]{@link context#getFileTypeErgName}
     */
    function getRegisterErgName(fileTypeName: string, registerName: string, locale?: string): string;

    /**
     * 
     * @returns String containing the portal server installation path
     */
    function getServerInstallPath(): string;

    /**
     * 
     * @returns <code>true</code> or <code>false</code>
     * @see [context.setSuperMode]{@link context#setSuperMode}
     */
    function getSuperMode(): boolean;

    /**
     * 
     * @returns SystemUser object representing the current user.
     * @see [context.findSystemUser]{@link context#findSystemUser} [context.findSystemUserByAlias]{@link context#findSystemUserByAlias} [context.getSystemUsers]{@link context#getSystemUsers}
     */
    function getSystemUser(): SystemUser;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 4.0c new optional parameter includeLockedUsers
     * <br><b>Since:</b>DOCUMENTS 5.0f HF2 new optional parameter includeInvisibleUsers
     * @param includeLockedUsers optional definition, if locked users also should be returned. The default value is <code>false</code>.
     * @param includeInvisibleUsers Optional flag indicating whether the method also should return users for which the option "Display user in DOCUMENTS lists" in the Documents Manager is not checkmarked. The default value is <code>false</code>.
     * @returns SystemUserIterator object containing a list of users created in the system.
     * @see [context.findSystemUser]{@link context#findSystemUser} [context.getSystemUser]{@link context#getSystemUser} [context.findSystemUserByAlias]{@link context#findSystemUserByAlias}
     */
    function getSystemUsers(includeLockedUsers?: boolean, includeInvisibleUsers?: boolean): SystemUserIterator;

    /**
     * 
     * @param accessToken String value with the token
     * @param dropToken Optional Boolean value that indicates the server to forget the token
     * @returns String with temporary path or Emptystring if accessToken is unknown
     */
    function getTempPathByToken(accessToken: string, dropToken?: boolean): string;

    /**
     * The created file path may be used without any danger of corrupting any important data by accident, because DOCUMENTS assures that there is no such file with the created filename yet.
     * @returns String containing the complete "safe" path and filename
     */
    function getTmpFilePath(): string;

    /**
     * With this method you can get an ArchiveConnection object. This object offers several methods to use the EAS Interface, EBIS or the EASY ENTERPRISE XML-Server.
     * <br><b>Since:</b>archiveServerName: Documents 4.0
     * @param archiveServerName Optional string containing the archive server name; If the archive server is not defined, then the main archive server will be used
     * @returns ArchiveConnection-Object or NULL, if failed
     * @deprecated since DOCUMENTS 5.0a - Use Context.getArchiveConnection(String archiveServerName) instead
     */
    function getXMLServer(archiveServerName?: string): ArchiveConnection;

    /**
     * 
     * @param moduleConst from PEM Module Constants.
     * @returns <code>true</code> if licenced, otherwise <code>false</code>
     */
    function hasPEMModule(moduleConst: number): Boolean;

    /**
     * This function invalidates or clears caches (e.g. <code>PortalScriptCache</code> and <code>ScriptEnumCache</code>) in order to reload them. Where appropriate you can also with this method reload the pem-file for the current principal via the parameter <code>pemReload</code>.
     * @param pemReload Optional boolean indicating whether the pem-file for the current principal to be reloaded. The default value is <code>false</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [context.reloadPrincipal]{@link context#reloadPrincipal}
     */
    function reloadCurrentPrincipal(pemReload?: boolean): boolean;

    /**
     * This function invalidates or clears caches (e.g. <code>PortalScriptCache</code> and <code>ScriptEnumCache</code>) in order to reload them. Where appropriate you can also with this method reload the pem-file for the desired principal via the parameter <code>pemReload</code>.
     * @param principalName String containing the name of the principal to be reloaded.
     * @param pemReload Optional boolean indicating whether the pem-file for the desired principal to be reloaded. The default value is <code>false</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [context.reloadCurrentPrincipal]{@link context#reloadCurrentPrincipal}
     */
    function reloadPrincipal(principalName: string, pemReload?: boolean): boolean;

    /**
     * With this method it is possible to send a String via TCP to a server. The return value of the function is the response of the server. Optional you can define a timeout in ms this function waits for the response of a server <br><b>Note:</b> The responseTimeout is effective only after a request has successfully been sent. Timeouts for connecting and sending are determined by the underlying OS.
     * @param server String containing the IP address or server host
     * @param port int containing the port on which the server is listening
     * @param request String with the request that should be sent to the server
     * @param responseTimeout int with the timeout for the response in ms. Default value is 3000ms
     * @returns String containing the response and NULL on error
     */
    function sendTCPStringRequest(server: string, port: number, request: string, responseTimeout?: number): string;

    /**
     * If you want to set the portal language different from the current users language, you can use this method. As parameter you have to use the two letter abbreviation as defined in the principal's settings in the Windows DOCUMENTS Manager (e.g. "de" for German).
     * @param locale String containing the two letter abbreviation for the locale
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.getClientLang]{@link context#getClientLang}
     */
    function setClientLang(locale: string): string;

    /**
     * 
     * @param langIndex integer value of the index of the desired system language
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @deprecated since DOCUMENTS 4.0c use setClientLang(String locale) instead
     */
    function setClientSystemLang(langIndex: number): boolean;

    /**
     * This method can be used to set the position of a top level folder (public, public dynamic or only subfolders folder with no parent) in the global context.
     * @param folder Folder object whose position to be set.
     * @param position new internal position number of folder.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [context.getFolderPosition]{@link context#getFolderPosition} [Folder.getPosition]{@link Folder#getPosition} [Folder.setPosition]{@link Folder#setPosition}
     */
    function setFolderPosition(folder: Folder, position: number): boolean;

    /**
     * 
     * @param attributeName The name of the desired attribute
     * @param value The value that should be assigned
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.getGlobalAttribute]{@link context#getGlobalAttribute}
     */
    function setGlobalAttribute(attributeName: string, value: string): boolean;

    /**
     * 
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [context.getCustomProperties]{@link context#getCustomProperties}
     * @see [context.addCustomProperty]{@link context#addCustomProperty}
     */
    function setOrAddCustomProperty(name: string, type: string, value: string): CustomProperty;

    /**
     * 
     * @param attributeName the technical name of the desired attribute
     * @param value the value that should be assigned
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.getCurrentUserAttribute]{@link context#getCurrentUserAttribute} [context.getPrincipalAttribute]{@link context#getPrincipalAttribute}
     */
    function setPrincipalAttribute(attributeName: string, value: string): boolean;

    /**
     * 
     * @param status String with the desired value of the status. There are following values available:
     *        <ul>
     *        <li><code>inherited</code></li>
     *        <li><code>released</code></li>
     *        <li><code>registered</code></li>
     *        <li><code>blocked</code></li>
     *        <li><code>removable</code></li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.getPrincipalStatus]{@link context#getPrincipalStatus}
     */
    function setPrincipalStatus(status: string): boolean;

    /**
     * 
     * @param value Float with in % of the execution (value >= 0 and value <= 100)
     * @returns
     * @see [context.setProgressBarText]{@link context#setProgressBarText} [context.getProgressBar]{@link context#getProgressBar}
     */
    function setProgressBar(value: number): void;

    /**
     * 
     * @param text String with the text to displayed in the progress bar
     * @returns
     * @see [context.setProgressBar]{@link context#setProgressBar} [context.getProgressBar]{@link context#getProgressBar}
     */
    function setProgressBarText(text: string): void;

    /**
     * The method gives "superrights" to the session and overrules the DOCUMENTS right management e.g. if you use (G)ACL in a filetype, in supermode a FileResultset / HitResultset in the script will find all files, independed of the access rights of the current user. The supermode will be inhertited to sub-scripts (e.g. implicit running enum scripts), but not to ScriptCalls.
     * @param value boolean to set / unset setSuperMode-flag
     * @returns
     * @see [context.getSuperMode]{@link context#getSuperMode}
     */
    function setSuperMode(value: boolean): void;

    /**
     * 
     * @param actionCode The integer code of the executed action to be logged. Range: 0 to 35 described as follows:
     *        <ul>
     *        <li><code>0</code> : Create file </li>
     *        <li><code>1</code> : Start edit file </li>
     *        <li><code>2</code> : Cancel edit file </li>
     *        <li><code>3</code> : Save file </li>
     *        <li><code>4</code> : Archive file </li>
     *        <li><code>5</code> : Delete file </li>
     *        <li><code>6</code> : Start workflow </li>
     *        <li><code>7</code> : Receive file </li>
     *        <li><code>8</code> : Forward file </li>
     *        <li><code>9</code> : Change filetype </li>
     *        <li><code>10</code> : Workflow escalation </li>
     *        <li><code>11</code> : Workflow decision </li>
     *        <li><code>12</code> : XML-Export </li>
     *        <li><code>13</code> : Workflow receive-signal </li>
     *        <li><code>14</code> : Workflow finished </li>
     *        <li><code>15</code> : Filetype created </li>
     *        <li><code>16</code> : Filetype changed </li>
     *        <li><code>17</code> : Filetype deleted </li>
     *        <li><code>18</code> : Filetype-field created </li>
     *        <li><code>19</code> : Filetype-field changed </li>
     *        <li><code>20</code> : Filetype-field deleted </li>
     *        <li><code>21</code> : Filetype-register created </li>
     *        <li><code>22</code> : Filetype-register changed </li>
     *        <li><code>23</code> : Filetype-register deleted </li>
     *        <li><code>24</code> : User created </li>
     *        <li><code>25</code> : User changed </li>
     *        <li><code>26</code> : User deleted </li>
     *        <li><code>27</code> : Access profile created </li>
     *        <li><code>28</code> : Access profile changed </li>
     *        <li><code>29</code> : Access profile deleted </li>
     *        <li><code>30</code> : Added user to access profile </li>
     *        <li><code>31</code> : Removed user from access profile </li>
     *        <li><code>32</code> : Delete file to trash </li>
     *        <li><code>33</code> : Recovery from trash </li>
     *        <li><code>34</code> : Delete archive file </li>
     *        <li><code>35</code> : Maintenance operation performed</li>
     *        </ul>
     * @param detail1 Optional String with length <= 255 containing additional information of the action. if the string length > 255, only the first 255 characters will be displayed.
     * @param detail2 Optional String with length <= 60 containing additional information of the action. if the string length > 60, only the first 60 characters will be displayed.
     * @param detail3 Optional String with length <= 60 containing additional information of the action. if the string length > 60, only the first 60 characters will be displayed.
     * @param logObject Optional object to be logged. Currently only DocFile object is allowed.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    function writeLogBook(actionCode: number, detail1: string, detail2: string, detail3: string, logObject: any): boolean;

}

/**
 * You may access ControlFlow objects of a certain WorkflowStep by the different methods described in the WorkflowStep chapter. The objects of this class reflect only outgoing control flows of a WorkflowStep object. <br><b>Note:</b> This class and all of its methods and attributes require a full workflow engine license, it does not work with pure submission lists.
 */
declare interface ControlFlow {
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly id: string;
    /**
     * This is usually the label of the according button in the web surface. <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly label: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly name: string;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
}

/**
 * You may access ControlFlowIterator objects of a certain WorkflowStep by the different methods described in the WorkflowStep chapter. The objects of this class reflect a list of outgoing control flows of a WorkflowStep object. <br><b>Note:</b> This class and all of its methods and attributes require a full workflow engine license, it does not work with pure submission lists.
 */
declare interface ControlFlowIterator {
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns ControlFlow or <code>null</code> in case of an empty ControlFlowIterator
     */
    first(): ControlFlow;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns ControlFlow or <code>null</code> if end of ControlFlowIterator is reached.
     */
    next(): ControlFlow;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns integer value with the amount of ControlFlow objects in the ControlFlowIterator
     */
    size(): number;
}

/**
 * The class CustomProperty provides a container where used specific data can be stored. E.g it will be used to store the last search masks. You can save project specific data using this class. The scripting classes SystemUser, AccessProfile and Context have the following access methods available:
 * <ul>
 * <li>getCustomProperties() </li>
 * <li>addCustomProperty() </li>
 * <li>setOrAddCustomProperty() </li>
 * </ul>
 * In the DOCUMENTS-Manager you can find the CustomProperty on the relation-tab properties at the fellow and user account, access profiles and file types. The global custom properties are listed in Documents > Global properties. A global custom property must not belong to a SystemUser, an AccessProfile, a file type and another custom property. All custom properties are located in Documents > All properties.
 * <br><b>Since:</b>DOCUMENTS 5.0 available for AccessProfile and Context
 * @see [SystemUser.getCustomProperties]{@link SystemUser#getCustomProperties}
 * @see [SystemUser.setOrAddCustomProperty]{@link SystemUser#setOrAddCustomProperty}
 * @see [SystemUser.addCustomProperty]{@link SystemUser#addCustomProperty}
 */
declare interface CustomProperty {
    name: string;
    type: string;
    value: string;
    /**
     * 
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [CustomProperty.setOrAddSubProperty]{@link CustomProperty#setOrAddSubProperty}
     * @see [CustomProperty.getSubProperties]{@link CustomProperty#getSubProperties}
     */
    addSubProperty(name: string, type: string, value: string): CustomProperty;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0f (new parameter includeSubProperties)
     * @param includeSubProperties Optional boolean indicating whether all subproperties should be also deleted recursively. The default value is <code>false</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    deleteCustomProperty(includeSubProperties?: boolean): boolean;
    /**
     * Valid attribute names are <code>name</code>, <code>type</code> and <code>value</code>
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * 
     * @param nameFilter String value defining an optional filter depending on the name
     * @param typeFilter String value defining an optional filter depending on the type
     * @returns CustomPropertyIterator
     * @see [CustomProperty.setOrAddSubProperty]{@link CustomProperty#setOrAddSubProperty}
     * @see [CustomProperty.addSubProperty]{@link CustomProperty#addSubProperty}
     */
    getSubProperties(nameFilter?: string, typeFilter?: string): CustomPropertyIterator;
    /**
     * An empty profile name disconnects the AccessProfile
     * @param nameAccessProfile Optional String value containing the name of the AccessProfile
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [CustomProperty.setSystemUser]{@link CustomProperty#setSystemUser}
     * @see [CustomProperty.setFiletype]{@link CustomProperty#setFiletype}
     */
    setAccessProfile(nameAccessProfile?: string): boolean;
    /**
     * Valid attribute names are <code>name</code>, <code>type</code> and <code>value</code>
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * An empty filetype name disconnects the filetype
     * @param nameFiletype Optional String value containing the technical name of the filetype
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [CustomProperty.setSystemUser]{@link CustomProperty#setSystemUser}
     * @see [CustomProperty.setAccessProfile]{@link CustomProperty#setAccessProfile}
     */
    setFiletype(nameFiletype?: string): boolean;
    /**
     * This method creates or modifies a unique subproperty for the custom property. The combination of the name and the type make the subproperty unique for the custom property.
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [CustomProperty.getSubProperties]{@link CustomProperty#getSubProperties}
     * @see [CustomProperty.addSubProperty]{@link CustomProperty#addSubProperty}
     */
    setOrAddSubProperty(name: string, type: string, value: string): CustomProperty;
    /**
     * 
     * @param parentProperty optional CustomProperty object being the parent CustomProperty of the current CustomProperty. If no parent CustomProperty is defined, the current CustomProperty will be moved to the top level.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [CustomProperty.setOrAddSubProperty]{@link CustomProperty#setOrAddSubProperty}
     * @see [CustomProperty.getSubProperties]{@link CustomProperty#getSubProperties}
     */
    setParentProperty(parentProperty: CustomProperty): boolean;
    /**
     * An empty login disconnects the SystemUser
     * @param login Optional String value containing the login name of the SystemUser.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [CustomProperty.setFiletype]{@link CustomProperty#setFiletype}
     * @see [CustomProperty.setAccessProfile]{@link CustomProperty#setAccessProfile}
     */
    setSystemUser(login?: string): boolean;
}

declare interface CustomPropertyIterator {
    /**
     * 
     * @returns CustomProperty or <code>null</code> in case of an empty CustomPropertyIterator
     */
    first(): CustomProperty;
    /**
     * 
     * @returns CustomProperty or <code>NULL</code> if end of CustomPropertyIterator is reached
     */
    next(): CustomProperty;
    /**
     * 
     * @returns integer value with the amount of CustomProperty objects in the CustomPropertyIterator
     */
    size(): number;
}

/**
 * This class enables you to connect to a database and execute SQL statements.<br><br>
 * You can connect to the DOCUMENTS database (see constructor without parameters) or to any external database (see constructor with parameters). For reading the result of a SELECT statement, the class DBResultSet is used. A DBConnection object can only be used for one DBResultSet object. Meaning, if you want to create another DBResultSet object you must also create an additional DBConnection object. Please consider the example in the constructor description.
 */
declare class DBConnection {
    /**
     * The constructor without parameters can be used to create a connection to the database currently used in DOCUMENTS. For connecting an external database, see the documentation of the constructor with parameters.
     * @see [DBResultSet]{@link DBResultSet}
     */
    constructor();

    /**
     * The constructor with parameters can be used to create a connection to an external database. Meaning to a database, that is not connected to DOCUMENTS. For connecting the DOCUMENTS database, we recommend to use the constructor without parameters.
     * 
     * You can connect to any database system of arbitrary type. But depending on your DOCUMENTS database, you can use different values for parameter <code>connType</code>. The difference is described in the following two cases.
     * 
     * <b>Case 1: </b> Parameter <code>connType</code> = <code>"sqlserver" | "oracle" | "mysql"</code>
     * 
     * This connection types allow you to connect to an external database of the given type. <em>But the type must be identical to the database system that is connected to the DOCUMENTS server.</em> DOCUMENTS supports the following types (also see system requirements).
     * <ul>
     * <li>Windows: SQL Server, Oracle Database, MySQL, MariaDB </li>
     * <li>Linux: MySQL, MariaDB </li>
     * </ul>
     * 
     * So this parameter values can be used with the following database systems:
     * <ul>
     * <li><code>"mysql"</code>: MySQL and MariaDB </li>
     * <li><code>"sqlserver"</code>: SQL Server </li>
     * <li><code>"oracle"</code>: Oracle Database </li>
     * </ul>
     * 
     * <b>Case 2: </b> Parameter <code>connType</code> = <code>"odbc"</code>
     * 
     * This connection type allows the connection to an external database of almost every type. In this case the database will be accessed using the standard API for databases, called Open Database Connectivity (ODBC). The only restriction is, that an ODBC driver for the database must be available and this driver must be installed on the DOCUMENTS host. Additional, an ODBC Driver Manager can or sometimes must be used to specify a Data Source Name (DSN). The DSN allows you to define the required connection attributes all in one place. Sometimes, the credentials can also be specified at the DSN. If not, they can be set as parameters in the DBConnection constructor.
     * 
     * On DOCUMENTS 5.0e and lower the DSN must be used, if the DOCUMENTS database is not SQL Server.
     * 
     * <b>ODBC</b>
     * 
     * A short and good description about the common ODBC concept is available in the [documentation of turbodbc]{@link https://turbodbc.readthedocs.io/en/latest/pages/odbc_configuration.html} (the ODBC documentation is independent of turbodbc). Additional there is a [Microsoft documentation about ODBC]{@link https://docs.microsoft.com/en-gb/sql/odbc/microsoft-open-database-connectivity-odbc}.
     * 
     * <b>ODBC on Windows</b>
     * 
     * If your DOCUMENTS is running on Windows with SQL Server, you will probably have an ODBC Driver for SQL Server. Additional you should have the [ODBC Data Source Administrator]{@link https://docs.microsoft.com/en-gb/sql/odbc/admin/odbc-data-source-administrator} App for configuring Data Sources. To connect to a remote SQL Server, you may have to [enable the TCP/IP protocol in SQL Server Configuration Manager]{@link https://docs.microsoft.com/en-gb/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port} and to open the port in the firewall on the remote SQL Server host.
     * 
     * <b>ODBC on Linux</b>
     * 
     * You can find installation instructions for the ODBC Driver for SQL Server in the [Microsoft Documentation]{@link https://docs.microsoft.com/en-us/sql/connect/odbc/linux-mac/installing-the-microsoft-odbc-driver-for-sql-server}. The ODBC Driver Manager package unixODBC is available in the package archives of Ubuntu (e.g. 16.04 and 18.04) and can be installed using the package manager APT. For testing your database connection independent of PortalScripting, you can use [isql]{@link https://turbodbc.readthedocs.io/en/latest/pages/troubleshooting.html#testing-your-odbc-configuration}.
     * 
     * <br><b>Note:</b> ODBC is not JDBC, JDBC is not supported!
     * @param connType The type of the database connection (<code>"odbc" | "sqlserver" | "oracle" | "mysql"</code>), see two cases in constructor description.
     * @param connString The complete connection string or the data source name (DSN).
     * @param user The login name used to authenticate against the external database.
     * @param password The (plaintext) password of the user utilized to connect to the database.
     * @see [DBResultSet]{@link DBResultSet}
     */
    constructor(connType: string, connString: string, user?: string, password?: string);

    /**
     * <br><b>Note:</b> It is strongly recommanded to close each DBConnection object you have created, since database connections are so-called expensive ressources and should be used carefully.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DBResultSet.close]{@link DBResultSet#close}
     */
    close(): boolean;

    /**
     * <br><b>Note:</b> This instruction should only be used to SELECT on the external database, since the method always tries to create a DBResultSet. If you need to execute different SQL statements, refer to the DBConnection.executeStatement() method.
     * 
     * <br><b>Note:</b> x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method handles the statement as UTF-8-String
     * @param sqlStatement String containing the SELECT statement you want to execute in the database
     * @returns DBResultSet containing the result rows generated by the SELECT instruction
     * @see [DBConnection.executeStatement]{@link DBConnection#executeStatement}
     */
    executeQuery(sqlStatement: string): DBResultSet;

    /**
     * <br><b>Note:</b> This instruction should only be used to SELECT on the external database, since the method always tries to create a DBResultSet. If you need to execute different SQL statements, refer to the DBConnection.executeStatement() method.
     * @param sqlStatement String containing the SELECT statement you want to execute in the database
     * @returns DBResultSet containing the result rows generated by the SELECT instruction
     * @see [DBConnection.executeStatementUC]{@link DBConnection#executeStatementUC}
     * @deprecated since DOCUMENTS 4.0a HF2, use DBConnection.executeQuery() instead
     */
    executeQueryUC(sqlStatement: string): DBResultSet;

    /**
     * You can execute any SQL statement, as long as the database driver used for the connection supports the type of instruction. Use this method especially if you want to INSERT or UPDATE or DELETE data rows in tables of the external database. If you need to SELECT table rows, refer to the DBConnection.executeQuery() method. <br><b>Note:</b> x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method handles the statement as UTF-8-String
     * @param sqlStatement
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DBConnection.executeQuery]{@link DBConnection#executeQuery}
     */
    executeStatement(sqlStatement: string): boolean;

    /**
     * You can execute any SQL statement, as long as the database driver used for the connection supports the type of instruction. Use this method especially if you want to INSERT or UPDATE or DELETE data rows in tables of the external database. If you need to SELECT table rows, refer to the DBConnection.executeQueryUC() method.
     * @param sqlStatement
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DBConnection.executeQueryUC]{@link DBConnection#executeQueryUC}
     * @deprecated since DOCUMENTS 4.0a HF2, use DBConnection.executeStatement() instead
     */
    executeStatementUC(sqlStatement: string): boolean;

    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;

}

/**
 * You need an active DBConnection object to execute an SQL query which is used to create a DBResultSet. <br><b>Note:</b> Important: Please consider the restrictions according the order of reading of the columns of the DBResultSet. Read the example!
 * 
 * 
 * The following data types for database columns will be supported:
 * <table border=1 cellspacing=0>
 * <tr><td><b>SQL data type</b></td><td><b>access method</b></td></tr>
 * <tr><td>SQL_INTEGER</td><td>getInt(), getString()</td></tr>
 * <tr><td>SQL_SMALLINT</td><td>getInt(), getString()</td></tr>
 * <tr><td>SQL_BIGINT</td><td>getInt(), getString()</td></tr>
 * <tr><td>SQL_FLOAT</td><td>getFloat(), getInt(), getString()</td></tr>
 * <tr><td>SQL_DECIMAL</td><td>getFloat(), getInt(), getString()</td></tr>
 * <tr><td>SQL_NUMERIC</td><td>getFloat(), getInt(), getString()</td></tr>
 * <tr><td>SQL_BIT</td><td>getBool(), getString()</td></tr>
 * <tr><td>SQL_TIMESTAMP</td><td>getTimestamp(), getString()</td></tr>
 * <tr><td>SQL_DATE</td><td>getDate(), getString()</td></tr>
 * <tr><td>SQL_GUID</td><td>getString()</td></tr>
 * <tr><td>SQL_VARCHAR</td><td>getString()</td></tr>
 * <tr><td>SQL_CHAR</td><td>getString()</td></tr>
 * <tr><td>all other types</td><td>getString()</td></tr>
 * </table>
 * <br><b>Since:</b>DOCUMENTS 5.0c HF1 (support for SQL_GUID)
 * @see [DBConnection]{@link DBConnection}
 */
declare interface DBResultSet {
    /**
     * <br><b>Note:</b> It is strongly recommanded to close each DBResultSet object you have created, since database connections and resultsets are so-called expensive ressources and should be used carefully.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DBConnection.close]{@link DBConnection#close}
     */
    close(): boolean;
    /**
     * 
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns boolean value representing the indicated column of the current row
     */
    getBool(colNo: number): boolean;
    /**
     * 
     * @param colNo integer value (zero based) indicating the desired column
     * @returns Column name as String
     */
    getColName(colNo: number): string;
    /**
     * <br><b>Note:</b> The return value will be null if the content of the indicated column cannot be converted to a Date object.
     * 
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns Date object representing the indicated column of the current row or <code>NULL</code> if is null-value
     */
    getDate(colNo: number): Date;
    /**
     * <br><b>Note:</b> The return value will be NaN if the content of the indicated column cannot be converted to a float value.
     * 
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns float value representing the indicated column of the current row or <code>NULL</code> if is null-value
     */
    getFloat(colNo: number): number;
    /**
     * <br><b>Note:</b> The return value will be NaN if the content of the indicated column cannot be converted to an integer value.
     * 
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns integer value representing the indicated column of the current row or <code>NULL</code> if is null-value
     */
    getInt(colNo: number): number;
    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * @returns Column count as int
     */
    getNumCols(): number;
    /**
     * <br><b>Note:</b> x64/UTF-8 DOCUMENTS version: since DOCUMENTS 4.0a HF2 the method transcode the fetched data to UTF-8
     * 
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns String representing the indicated column of the current row or <code>NULL</code> if is null-value
     */
    getString(colNo: number): string;
    /**
     * <br><b>Note:</b> The return value will be null if the content of the indicated column cannot be converted to a Date object.
     * 
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns Date object (including time) representing the indicated column of the current row or <code>NULL</code> if is null-value
     */
    getTimestamp(colNo: number): Date;
    /**
     * <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @param colNo integer value (zero based) indicating the desired column of the current row of the DBResultSet
     * @returns String representing the indicated column of the current row or <code>NULL</code> if is null-value
     * @deprecated since DOCUMENTS 4.0a HF2 use DBResultSet.getString() instead
     */
    getUCString(colNo: number): string;
    /**
     * The method must be called at least once after retrieving a DBResultSet, because the newly created object does not point to the first result row but to BOF (beginning of file). <br><b>Note:</b> every value of a DBResultSet can only be read one time and in the correct order!
     * @returns <code>true</code> if the DBResultSet now points to the next row, <code>false</code> if there is no further result row
     */
    next(): boolean;
}

/**
 * You may access a single DocFile with the help of the attribute <code>context.file</code> or by creating a FileResultset. There are no special properties available, but each field of a file is mapped to an according property. You can access the different field values with their technical names.
 * 
 * For this reason it is mandatory to use programming language friendly technical names, meaning
 * <ul>
 * <li>only letters, digits and the underscore "_" are allowed. </li>
 * <li>no whitespaces or any special characters are allowed. </li>
 * <li>the technical name must not start with a digit. </li>
 * <li>only the first 32 characters of the technical name are significant to identify the field.</li>
 * </ul>
 */
declare interface DocFile {
    /**
     * Each field of a DocFile is mapped to an according property. You can access the field value with the technical name.
     */
    fieldName: any;
    /**
     * If you switched a file to edit mode with the startEdit() method and if you want to cancel this (e.g. due to some error that has occurred in the mean time) this function should be used to destroy the scratch copy which has been created by the startEdit() instruction.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.startEdit]{@link DocFile#startEdit} [DocFile.commit]{@link DocFile#commit}
     */
    abort(): boolean;
    /**
     * It is possible to parse Autotexts inside the source file to fill the Document with the contents of index fields of a DocFile object. The max. file size for the source file is 512 KB.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param pathDocument String value containing the complete filepath to the source file on the server
     * @param targetRegister String value containing the technical name of the desired Register
     * @param targetFileName String value containing the desired filename of the uploaded Document
     * @param deleteDocumentAtFileSystem optional boolean value to decide whether to delete the source file on the server's filesystem
     * @param parseAutoText optional boolean value to decide whether to parse the AutoText values inside the source file. Note: if you want to make use of AutoTexts in this kind of template files, you need to use double percentage signs instead of single ones, e.g. %%Field1%% instead of %Field1%!
     * @param referencFileToParse optional DocFile object to be used to parse the AutoTexts inside the template. If you omit this parameter, the current DocFile object is used as the data source.
     * @returns <code>Document</code> if successful, <code>null</code> in case of any error
     */
    addDocumentFromFileSystem(pathDocument: string, targetRegister: string, targetFileName: string, deleteDocumentAtFileSystem?: boolean, parseAutoText?: boolean, referencFileToParse?: DocFile): Document;
    /**
     * The different document types of your documents on your different tabs require the appropriate PDF filter programs to be installed and configured in DOCUMENTS. To successfully add the created PDF file to a register the DocFile needs to be in edit mode (via startEdit() method), and the changes have to be applied via commit().
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param pathCoverXML String containing full path and filename of the template xml file to parse
     * @param createCover boolean whether to create a field list or to only take the documents
     * @param pdfFileName String value for the desired file name of the created PDF
     * @param targetRegister String value containing the technical name of the target document register
     * @param sourceRegisterNames Array with the technical names of the document registers you want to include
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addPDF(pathCoverXML: string, createCover: boolean, pdfFileName: string, targetRegister: string, sourceRegisterNames: any[]): boolean;
    /**
     * The target archive has to be configured in the filetype definition (in the Windows Portal Client) as the default archive. If no default archive is defined, the execution of this operation will fail.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    archive(): boolean;
    /**
     * If the target archive key is misspelled or if the target archive does not exist, the operation will fall back to the default archive, as long as it is configured in the filetype definition. So the function will only fail if both the target archive and the default archive are missing. <br><b>Note:</b> For EE.i: It is important to know that the target archive String must use the socalled XML-Server syntax. The old EAG syntax is not supported. It is as well neccessary to use a double backslash (\\) if you define your target archive as an ECMAScript String value, because a single backslash is a special character.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: Documents 4.0
     * @param archiveKey String value containing the complete archive key for EE.i or schema|view for EE.x of the desired target archive
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    archive(archiveKey: string): boolean;
    /**
     * This is the most powerful way to archive a file through scripting, since the ArchivingDescription object supports a convenient way to influence which parts of the DocFile should be archived.
     * <br><b>Since:</b>EE.x: ELC 3.60a / otrisPORTAL 6.0a
     * <br><b>Since:</b>EAS: Documents 4.0
     * @param desc ArchivingDescription object that configures several archiving options
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [ArchivingDescription]{@link ArchivingDescription}
     */
    archive(desc: ArchivingDescription): boolean;
    /**
     * The target archive has to be configured in the filetype definition (in the Windows Portal Client) as the default archive. It depends on the filetype settings as well, whether Status and Monitor will be archived as well. If no default archive is defined, the execution of this operation will fail. <br><b>Note:</b> It is strictly forbidden to access the DocFile object after this function has been executed successfully; if you try to access it, your script will fail, because the DocFile does not exist any longer in DOCUMENTS. For the same reason it is strictly forbidden to execute this function in a signal exit PortalScript.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    archiveAndDelete(): boolean;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0c HF2 (new parameter fieldList)
     * <br><b>Since:</b>DOCUMENTS 5.0F (new parameter jsonMode)
     * @param fieldList optional String array to specify the JSON output. The array must contain field names and DocFile attributes from the following list
     *        <ul>
     *        <li><code>"DlcFile_Title"</code></li>
     *        <li><code>"DlcFile_Owner"</code></li>
     *        <li><code>"DlcFile_Created"</code></li>
     *        <li><code>"DlcFile_LastEditor"</code></li>
     *        <li><code>"DlcFile_LastModified"</code></li>
     *        </ul>
     * @param jsonMode optional Integer bit mask to specify the JSON output structure. The jsonMode can be combined by the following values
     *        <ul>
     *        <li><code>util.JSON_RAW</code></li>
     *        <li><code>util.JSON_LABEL</code></li>
     *        <li><code>util.JSON_LOCALE</code></li>
     *        </ul>
     * @returns <code>string</code> with JSON content.
     * @see [DocFile.fromJSON]{@link DocFile#fromJSON}
     */
    asJSON(fieldList?: String[], jsonMode?: number): string;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    cancelWorkflow(): boolean;
    /**
     * 
     * @param nameFiletype String containing the technical name of the filetype.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    changeFiletype(nameFiletype: string): boolean;
    /**
     * This method can only be used for a DocFile, that runs in a workflow and the workflow has receive signals. Usually the receive signals of the workflow step will be checked by a periodic job. Use this method to trigger the check of the receive signals for the DocFile.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    checkWorkflowReceiveSignal(): boolean;
    /**
     * 
     * @param pUser SystemUser object of the desired user
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.setFollowUpDate]{@link DocFile#setFollowUpDate}
     */
    clearFollowUpDate(pUser: SystemUser): boolean;
    /**
     * This method is mandatory to apply changes to a file that has been switched to edit mode with the startEdit() method. It is strictly prohibited to execute the commit() method in a script which is attached to the onSave scripting hook.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.startEdit]{@link DocFile#startEdit} [DocFile.sync]{@link DocFile#sync} [DocFile.abort]{@link DocFile#abort}
     */
    commit(): boolean;
    /**
     * The (public) folder must be a real folder, it must not be a dynamic filter, nor a "only subfolder" object.
     * @param fObj Folder object representing the desired target public folder
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [DocFile.disconnectFolder]{@link DocFile#disconnectFolder}
     */
    connectFolder(fObj: Folder): boolean;
    /**
     * <br><b>Note:</b> When this function is called on an EE.x DocFile with an empty field name, the return value may be greater than expected. The DOCUMENTS image of such a file can include EE.x system fields and symbolic fields for other imported scheme attributes (blob content, notice content).
     * @param fieldName String containing the technical name of the fields to be counted.
     * @returns The number of fields als an Integer.
     */
    countFields(fieldName: string): number;
    /**
     * 
     * @param templateName String name of the filetypes template that must be used
     * @returns <code>string</code> with path to the created document object or an empty string, if failed.
     */
    createDocumentFromTemplate(templateName: string): string;
    /**
     * This method creates a monitor file in the server's file system with the workflow monitor content of the DocFile. The file will be created as a html-file. <br><b>Note:</b> This generated file will no be automatically added to the DocFile
     * @param asPDF boolean parameter that indicates that a pdf-file must be created instead of a html-file
     * @param locale String (de, en,..) in which locale the file must be created (empty locale = log-in locale)
     * @returns String containing the path of the created file
     */
    createMonitorFile(asPDF?: boolean, locale?: string): string;
    /**
     * This method creates a status file in the server's file system with the status content of the DocFile. The file will be created as a html-file. <br><b>Note:</b> This generated file will no be automatically added to the DocFile
     * @param asPDF boolean parameter that indicates that a pdf-file must ge created instead of a html-file
     * @param locale String (de, en,..) in which locale the file must be created (empty locale = log-in locale)
     * @returns String containing the path of the created file
     */
    createStatusFile(asPDF?: boolean, locale?: string): string;
    /**
     * If there's another PortalScript attached to the onDelete scripting hook, it will be executed right before the deletion takes place. <br><b>Note:</b> It is strictly forbidden to access the DocFile object after this function has been executed successfully; if you try to access it, your script will fail, because the DocFile does not exist any longer in DOCUMENTS. For the same reason it is strictly forbidden to execute this function in a signal exit PortalScript.
     * 
     * <br><b>Note:</b> The parameters moveTrash, movePool are ignored for archive files. The parameters allVersions and easDeleteMode require an EAS/EDA file and are ignored otherwise.
     * 
     * <br><b>Note:</b> The parameter easDeleteMode is interpreted in the following way. 0 = Use default setting (property "EASDeleteMode" of the archive store or factory setting); 1 = quick delete (restorable from WORM directory with archive administration tools); 2 = full delete (requires archive maintenance login "eas_keeper"). The last option ist occasionally needed to make a solution compliant with EU-GDPR. If a script tries to delete the actual "context.file", the server usually enforces "movePool = true". This is controlled by the common DOCUMENTS property "ContextFileDeleteProtection".
     * <br><b>Since:</b>ELC 3.50n / otrisPORTAL 5.0n (moveTrash parameter)
     * <br><b>Since:</b>ELC 3.51f / otrisPORTAL 5.1f (movePool parameter)
     * <br><b>Since:</b>DOCUMENTS 4.0a HF1 (available for archive files)
     * <br><b>Since:</b>DOCUMENTS 4.0e (all versions)
     * <br><b>Since:</b>DOCUMENTS 5.0e (easDeleteMode)
     * @param moveTrash optional boolean parameter to decide whether to move the deleted file to the trash folder
     * @param movePool optional boolean parameter to decide whether to move the deleted file's object to the file pool
     * @param allVersions optional boolean parameter to delete all versions of an EAS archive file at once.
     * @param easDeleteMode opional integer specifying the delete mode for an EAS archive file. See remarks.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    deleteFile(moveTrash?: boolean, movePool?: boolean, allVersions?: boolean, easDeleteMode?: number): boolean;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [DocFile.archive]{@link DocFile#archive}
     */
    disconnectArchivedFile(): boolean;
    /**
     * The (public) folder must be a real folder, it must not be a dynamic filter, nor a "only subfolder" object.
     * @param fObj Folder object representing the desired target public folder
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [DocFile.connectFolder]{@link DocFile#connectFolder}
     */
    disconnectFolder(fObj: Folder): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60e / otrisPORTAL 6.0e (Option: export of status & monitor)
     * @param pathXML String containing full path and filename of the desired target xml file
     * @param withDocuments boolean value to include the documents. The value must be set to <code>true</code> in case status or monitor information are to be inserted.
     * @param withStatus boolean value to include status information. The value must be set to <code>true</code> in order to add the status. Status Information will then be generated into a file which will be added to the documents. Please note that therefore <code>withDocuments</code> must be set to true in order to get Status information.
     * @param withMonitor boolean value to include Monitor information. The value must be set to <code>true</code> in order to add the monitor. Monitor Information will then be generated into a file which will be added to the documents. Please note that therefore <code>withDocuments</code> must be set to true in order to get Monitor information.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    exportXML(pathXML: string, withDocuments: boolean, withStatus?: boolean, withMonitor?: boolean): boolean;
    /**
     * This method only works if the file is inside a workflow and inside a workflow action that is accessible by a user of the web interface. Based on that current workflowstep you need to gather the ID of one of the outgoing control flows of that step. The access privileges of the current user who tries to execute the script are taken into account. Forwarding the file will only work if that control flow is designed to forward without query. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param controlFlowId String containing the technical ID of the outgoing control flow that should be passed
     * @param comment optional String value containing a comment to be automatically added to the file's monitor
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    forwardFile(controlFlowId: string, comment?: string): boolean;
    /**
     * <br><b>Note:</b> Only JSON-Strings that are created by DocFile.asJSON() with jsonMode = 0 can be imported
     * 
     * 
     * Must be followed by <code>sync()</code>
     * @param jsonstring
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [DocFile.asJSON]{@link DocFile#asJSON}
     */
    fromJSON(jsonstring: string): boolean;
    /**
     * The locking workflow steps do not need to be locked by the current user executing the script, this function as well returns all locking steps which refer to different users. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns WorkflowStepIterator object which represents a list of all locking workflow steps for the file
     * @see [DocFile.getCurrentWorkflowStep]{@link DocFile#getCurrentWorkflowStep} [DocFile.getFirstLockingWorkflowStep]{@link DocFile#getFirstLockingWorkflowStep}
     */
    getAllLockingWorkflowSteps(): WorkflowStepIterator;
    /**
     * The methd will return all workflow steps, the currently locking and the previous ones. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns WorkflowStepIterator object which represents a list of all workflow steps for the file
     * @see [DocFile.getCurrentWorkflowStep]{@link DocFile#getCurrentWorkflowStep} [DocFile.getFirstLockingWorkflowStep]{@link DocFile#getFirstLockingWorkflowStep}
     */
    getAllWorkflowSteps(): WorkflowStepIterator;
    /**
     * <br><b>Note:</b> If the file is not archived or archived without versioning or uncoupled from the achived file the key is empty.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param withServer optional boolean value to indicate, if the key should include an "@archiveServerName" appendix
     * @returns String containing the key.
     * @see [DocFile.archive]{@link DocFile#archive}
     */
    getArchiveKey(withServer?: boolean): string;
    /**
     * The different document types of your documents on your different tabs require the appropriate PDF filter programs to be installed and configured in DOCUMENTS.
     * @param nameCoverTemplate String containing the name of the pdf cover template defined at the filetype
     * @param createCover boolean whether to create a field list or to only take the documents
     * @param sourceRegisterNames Array with the technical names of the document registers you want to include
     * @returns <code>String</code> with file path of the pdf, an empty string in case of any error
     */
    getAsPDF(nameCoverTemplate: string, createCover: boolean, sourceRegisterNames: any[]): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param autoText the rule to be parsed
     * @returns String containing the parsed value of the autotext
     */
    getAutoText(autoText: string): string;
    /**
     * This function creates a real 1:1 copy of the current file which may be submitted to its own workflow. The function returns the copied file. If an error occurrs, the function returns null and <code>getLastError()</code> can be called on the calling object.
     * @param copyMode defines how to handle the documents of the originating file.<br>
     *        There are three different parameter values allowed:
     *        <ul>
     *        <li><code>"NoDocs"</code> copied DocFile does not contain any documents </li>
     *        <li><code>"ActualVersion"</code> copied DocFile contains only the latest (published) version of each document </li>
     *        <li><code>"AllVersions"</code> copied DocFile contains all versions (both published and locked) of each document </li>
     *        </ul>
     * @returns DocFile object representing the copied file, null in case of error
     */
    getCopy(copyMode: "NoDocs" | "ActualVersion" | "AllVersions"): DocFile;
    /**
     * 
     * @returns <code>Date</code> object, if the date is valid, <code>null</code> for an invalid data.
     * @see [DocFile.getCreator]{@link DocFile#getCreator}
     * @see [DocFile.getLastModificationDate]{@link DocFile#getLastModificationDate}
     */
    getCreationDate(): Date;
    /**
     * 
     * @param asObject optional boolean value, that specifies, if the SystemUser object or the fullname should be returned.
     * @returns <code>asObject=true:</code><code>SystemUser</code> object or <code>null</code> (if user does not exist anymore)
     * @see [DocFile.getLastModifier]{@link DocFile#getLastModifier}
     * @see [DocFile.getCreationDate]{@link DocFile#getCreationDate}
     */
    getCreator(asObject?: boolean): any;
    /**
     * The function returns a valid WorkflowStep object if there exists one for the current user. If the current user does not lock the file, the function returns <code>null</code> instead. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns WorkflowStep object
     * @see [DocFile.getFirstLockingWorkflowStep]{@link DocFile#getFirstLockingWorkflowStep}
     */
    getCurrentWorkflowStep(): WorkflowStep;
    /**
     * 
     * @returns <code>DocFileDataField</code> object or <code>null</code>.
     */
    getDocFileComment(): DocFileDataField;
    /**
     * 
     * @param fieldName String containing the technical field name can be followed by the desired instance number in form techFieldName[i] for multi-instance fields of an EE.i/EE.x archive file. <br><b>Note:</b> The index <code>i</code> is zero-based. The specification of field instance is olny available for an EE.i/EE.x archive file, it will be ignored for other files. If the parameter contains no instance information, the first field instance is used. The field instance order is determined by the field order in the file.
     * @param resolved Optional boolean value indicating whether to return the full multi language enumeration values (e.g. "key;de:Wert;en:Value") instead of only the keys (e.g. "key"). The default value is false.
     * @returns Array of strings containing the multi language enumeration values or only the keys.
     */
    getDoubleSelectListValues(fieldName: string, resolved?: boolean): string[];
    /**
     * 
     * @param autoText to be parsed
     * @returns Array containing the values for the autotext
     */
    getEnumAutoText(autoText: string): any[];
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param fieldName String containing the technical name of the desired field
     * @param attrName String containing the name of the desired attribute
     * @returns String containing the value of the desired field attribute
     */
    getFieldAttribute(fieldName: string, attrName: string): string;
    /**
     * The following AutoTexts are available
     * <ul>
     * <li><code>"[locale]"</code> - field value in the user locale or specified locale. </li>
     * <li><code>"key"</code> - key value (e.g. at refence fields, enumeration fields, etc.). </li>
     * <li><code>"fix"</code> - fix format value (e.g. at numeric fields, date fields, etc.). </li>
     * <li><code>"pos"</code> - order position of the field value at enumeration fields. </li>
     * <li><code>"raw"</code> - database field value. </li>
     * <li><code>"label[.locale]"</code> - label of the field in user locale or specified locale.</li>
     * </ul>
     * @param fieldName Name of the field as string
     * @param autoText The desired AutoText (see list) as string (default = "[locale]" returns field value in the user locale)
     * @returns <code>String</code> with the AutoText.
     */
    getFieldAutoText(fieldName: string, autoText?: string): string;
    /**
     * This allows generic scripts to be capable of different versions of the same filetype, e.g. if you changed details of the filetype, but there are still older files of the filetype in the system.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param index index of the desired field
     * @returns string containing the technical name of the file field, <code>false</code> if index is out of range
     */
    getFieldName(index: number): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 4.0c HF2 available for multi-instance fields of an EE.i/EE.x archive file
     * <br><b>Since:</b>DOCUMENTS 5.0e HF2 (optional parameter returnType)
     * @param fieldName String containing the technical field name can be followed by the desired instance number in form techFieldName[i] for multi-instance fields of an EE.i/EE.x archive file. <br><b>Note:</b> The index <code>i</code> is zero-based. The specification of field instance is olny available for an EE.i/EE.x archive file, it will be ignored for other files. If the parameter contains no instance information, the first field instance is used. The field instance order is determined by the field order in the file.
     * @param returnType Optional string specified the type of the return value. Currently only the type "Array" is available for <b>a double select list field</b>.
     * @returns The field value, its type depends on the field type (such as a Date object returned for a field of type 'Timestamp') or the specified return type if applicable.
     * @see [FieldAccessMethods]{@link FieldAccessMethods}
     */
    getFieldValue(fieldName: string, returnType: string): any;
    /**
     * 
     * @returns SystemUser object representing the user who owns the file
     */
    getFileOwner(): SystemUser;
    /**
     * The first locking workflow step does not need to be locked by the current user executing the script, this function as well returns the first locking step if it is locked by a different user. If no locking step is found at all, the function returns <code>null</code> instead. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns WorkflowStep object
     * @see [DocFile.getCurrentWorkflowStep]{@link DocFile#getCurrentWorkflowStep}
     */
    getFirstLockingWorkflowStep(): WorkflowStep;
    /**
     * 
     * @returns <code>String</code> with the file id.
     */
    getid(): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * @returns <code>Date</code> object, if the date is valid, <code>null</code> for an invalid data.
     * @see [DocFile.getLastModifier]{@link DocFile#getLastModifier}
     * @see [DocFile.getCreationDate]{@link DocFile#getCreationDate}
     */
    getLastModificationDate(): Date;
    /**
     * 
     * @returns <code>String</code> with the fullname.
     * @see [DocFile.getCreator]{@link DocFile#getCreator}
     * @see [DocFile.getLastModificationDate]{@link DocFile#getLastModificationDate}
     */
    getLastModifier(): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the DocFile object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the DocFile object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * If you run a scipt on a scratch copy (e.g. a onSave script), you can get the orginal file with this function.
     * @returns DocFile
     */
    getOriginal(): DocFile;
    /**
     * If the current file's filetype is connected to a superior filetype by a reference field, this function allows to easily access the referred file, e.g. if you are in an invoice file and you want to access data of the referring company.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param referenceFileField String value containing the technical name of the file field contianing the definition to the referred filetype
     * @returns DocFile object representing the referred file if successful, <code>null</code> in case of any error
     */
    getReferenceFile(referenceFileField: string): DocFile;
    /**
     * <br><b>Note:</b> Until version 5.0c this method ignored the access rights of the user to the register. With the optional parameter checkAccessRight this can now be done. For backward compatibility the default value is set to false.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0c (new optional parameter checkAccessRight)
     * @param registerName String value containing the technical name of the desired register
     * @param checkAccessRight optional boolean value, that indicates if the access rights should be considered.
     * @returns Register object representing the desired register
     * @see [DocFile.getRegisters]{@link DocFile#getRegisters}
     */
    getRegisterByName(registerName: string, checkAccessRight?: boolean): Register;
    /**
     * <br><b>Note:</b> Until version 5.0c this method ignored the access rights of the user to the register. With the optional parameter checkAccessRight this can now be done. For backward compatibility the default value is set to false.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0c (new optional parameter checkAccessRight)
     * @param type optional String value to filter for a desired register type. Default type is <code>documents</code><br>
     *        Allowed values:
     *        <ul>
     *        <li><code>documents</code></li>
     *        <li><code>fields</code></li>
     *        <li><code>links</code></li>
     *        <li><code>archiveddocuments</code></li>
     *        <li><code>externalcall</code></li>
     *        <li><code>all</code> (returns all registers independent of the type) </li>
     *        </ul>
     * @param checkAccessRight optional boolean value, that indicates if the access rights should be considered.
     * @returns RegisterIterator with all registers (matching the filter)
     * @see [RegisterIterator]{@link RegisterIterator} [DocFile.getRegisterByName]{@link DocFile#getRegisterByName}
     */
    getRegisters(type?: string, checkAccessRight?: boolean): RegisterIterator;
    /**
     * <br><b>Note:</b> the special locale raw returns the title in all locales
     * @param locale Locale as String (default = user locale)
     * @returns <code>String</code> with the title.
     */
    getTitle(locale?: string): string;
    /**
     * 
     * @param login String containing the login name of the desired user
     * @returns String with the status. Possible values:
     *          <ul>
     *          <li><code>standard</code></li>
     *          <li><code>new</code></li>
     *          <li><code>fromFollowup</code></li>
     *          <li><code>toForward</code></li>
     *          <li><code>forInfo</code></li>
     *          <li><code>task</code></li>
     *          <li><code>workflowCanceled</code></li>
     *          <li><code>backFromDistribution</code></li>
     *          <li><code>consultation</code></li>
     *          </ul>
     * @see [DocFile.setUserStatus]{@link DocFile#setUserStatus}
     */
    getUserStatus(login: string): string;
    /**
     * 
     * @returns String with key
     */
    getWebKey(): string;
    /**
     * 
     * @param fieldName String containing the technical name of the field.
     * @returns <code>true</code> if the file has the field, <code>false</code> if not
     */
    hasField(fieldName: string): boolean;
    /**
     * This function is especially useful in connection with PortalScripts being used as decision guards in workflows, because this allows to comment and describe the decisions taken by the scripts. This increases transparency concerning the life cycle of a file in DOCUMENTS.
     * @param action String containing a brief description
     * @param comment optional String containing a descriptive comment to be added to the status entry
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    insertStatusEntry(action: string, comment: string): boolean;
    /**
     * 
     * @returns <code>true</code> if is an archive file, <code>false</code> if not
     */
    isArchiveFile(): boolean;
    /**
     * 
     * @returns <code>true</code> if is a deleted file, <code>false</code> if not
     */
    isDeletedFile(): boolean;
    /**
     * 
     * @returns <code>true</code> if new file, <code>false</code> if not
     */
    isNewFile(): boolean;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> if not - get error message with getLastError()
     */
    reactivate(): boolean;
    /**
     * 
     * @param receivers Array with the names of the users or groups to which to send the DocFile. You need to specify at least one recipient.
     * @param sendMode String containing the send type. The following values are available:
     *        <ul>
     *        <li><code>sequential</code> - one after the other </li>
     *        <li><code>parallel_info</code> - concurrently for information </li>
     *        </ul>
     * @param task String specifying the task for the recipients of the DocFile
     * @param backWhenFinished boolean indicating whether the DocFile should be returned to the own user account after the cycle.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    sendFileAdHoc(receivers: any[], sendMode: string, task: string, backWhenFinished: boolean): boolean;
    /**
     * You must define an email template in the Windows Portal Client at the filetype of your DocFile object. This template may contain autotexts that can be parsed and replaced with their appropriate field values.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 4.0d new parameter bcc
     * @param from String value containing the sender's email address
     * @param templateName String value containing the technical name of the email template. This must be defined on the email templates tab of the filetype.
     * @param to String value containing the email address of the recipient
     * @param cc Optional String value for an additional recipient ("cc" means "carbon copy")
     * @param addDocs optional boolean value whether to include the documents of the file
     * @param bcc Optional String value for the email addresses of blind carbon-copy recipients (remaining invisible to other recipients).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    sendMail(from: string, templateName: string, to: string, cc?: string, addDocs?: boolean, bcc?: string): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param fieldName String containing the technical name of the desired field
     * @param attrName String containing the name of the desired attribute
     * @param value String value containing the desired field attribute value
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFieldAttribute(fieldName: string, attrName: string, value: string): boolean;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 4.0c HF2 available for multi-instance fields of an EE.i/EE.x archive file
     * <br><b>Since:</b>DOCUMENTS 5.0c HF2 String array as value for a double select list field
     * @param fieldName String containing the technical field name can be followed by the desired instance number in form techFieldName[i] for multi-instance fields of an EE.i/EE.x archive file. <br><b>Note:</b> The index <code>i</code> is zero-based. The specification of field instance is only available for an EE.i/EE.x archive file, it will be ignored for other files. If the parameter contains no instance information, the first field instance is used. The field instance order is determined by the field order in the file.
     * @param value The desired field value of the proper type according to the field type, e.g. a Date object as value of a field of type 'Timestamp'. <br><b>Note:</b> The keys of the enumeration values for a double select list field may be passed either as an Array of strings or as an ordinary string with one key per line of text (see FieldAccessMethods).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    setFieldValue(fieldName: string, value: any): boolean;
    /**
     * 
     * @param owner SystemUser object representing the desired new file owner
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFileOwner(owner: SystemUser): boolean;
    /**
     * 
     * @param pUser SystemUser object of the desired user
     * @param followUpDate Date object representing the desired followup date
     * @param comment optional String value containing a comment that is displayed as a task as soon as the followup is triggered
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.clearFollowUpDate]{@link DocFile#clearFollowUpDate}
     */
    setFollowUpDate(pUser: SystemUser, followUpDate: Date, comment?: string): boolean;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0f (Option referenceFile = null for deselecting the referred file)
     * @param fieldName String value containing the technical name of the reference field
     * @param referenceFile DocFile object representing the referred file or <code>null</code> to indicate deselecting the referred file. If the property 'ReferenceFileClearDefaultValuesOnDeselect' is set to 1, the default values (of the other fields) from the referred file are deleted by deselecting the referred file.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setReferenceFile(fieldName: string, referenceFile: DocFile): boolean;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param login String containing the login name of the desired user
     * @param fileRead boolean whether the file should be markes as read (<code>true</code>) or unread (<code>false</code>)
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setUserRead(login: string, fileRead: boolean): boolean;
    /**
     * The file icon in the list view and file view depends on this status.
     * <br><b>Since:</b>DOCUMENTS 4.0c (status values extended)
     * @param login String containing the login name of the desired user
     * @param status String value containing the desired status<br>
     *        Allowed values:
     *        <ul>
     *        <li><code>standard</code></li>
     *        <li><code>new</code></li>
     *        <li><code>fromFollowup</code></li>
     *        <li><code>toForward</code></li>
     *        <li><code>forInfo</code></li>
     *        <li><code>task</code></li>
     *        <li><code>workflowCanceled</code></li>
     *        <li><code>backFromDistribution</code></li>
     *        <li><code>consultation</code></li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.getUserStatus]{@link DocFile#getUserStatus}
     */
    setUserStatus(login: string, status: string): boolean;
    /**
     * Switching a file to edit mode with this function has the same effect as the "Edit" button in the web surface of DOCUMENTS. This means, a scratch copy of the file is created, and any changes you apply to the file are temporarily stored in the scratch copy - until you <code>commit()</code> your changes back to the original file. There are a few scripting event hooks which disallow the use of this function at all costs:
     * <ul>
     * <li><code>onEdit</code> hook - the system has already created the scratch copy. </li>
     * <li><code>onCreate</code> hook - a newly created file is always automatically in edit mode.</li>
     * </ul>
     * You should avoid using this function in scripts that are executed inside a workflow (signal exits, decisions etc.).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.abort]{@link DocFile#abort}
     */
    startEdit(): boolean;
    /**
     * 
     * @param workflowName String containing the technical name and optional the version number of the workflow. The format of the workflowName is <code>technicalName</code>[-version]. If you don't specify the version of the workflow, the workflow with the highest workflow version number will be used. If you want to start a specific version you have to use technicalName-version e.g. (Invoice-2) as workflowName.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    startWorkflow(workflowName: string): boolean;
    /**
     * If you want to apply changes to file fields through a script that is executed as a signal exit inside a workflow, you should rather prefer sync() than the <code>startEdit() / commit()</code> instruction pair. <br><b>Note:</b> If there's a scratch copy of the file in the system (e.g. by some user through the web surface), committing the changes in the scratch copy results in the effect that your synced changes are lost. So be careful with the usage of this operation.
     * 
     * <br><b>Note:</b> In case of an error, the function stops immediately, regardless of how many values were already written to the database. So if sync() finishes due to an error, the file will probably contain some but not all new values. If you change field values using setFieldValue(), you can get the errors before you call sync().
     * <br><b>Since:</b>DOCUMENTS 5.0a (new parameter updateRefFields)
     * <br><b>Since:</b>DOCUMENTS 5.0a HF2 (new parameter updateModifiedDate)
     * @param checkHistoryFields optional boolean parameter has to be set to true, if the file contains history fields, that are modified
     * @param notifyHitlistChange optional boolean parameter indicates the web client to refresh the current hitlist
     * @param updateRefFields optional boolean parameter indicates to update reference fields if using the property AutoUpdateByRefFields
     * @param updateModifiedDate optional boolean parameter indicates to update the modification date of the file
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [DocFile.startEdit]{@link DocFile#startEdit} [DocFile.commit]{@link DocFile#commit} [DocFile.setFieldValue]{@link DocFile#setFieldValue}
     */
    sync(checkHistoryFields?: boolean, notifyHitlistChange?: boolean, updateRefFields?: boolean, updateModifiedDate?: boolean): boolean;
    /**
     * Sets the status active to a file and redraws it from the trash folder. Deleted files are not searchable by a <code>FileResultSet</code>. You can only retrieve deleted files by iterating throw the trash-folder of the users
     * @returns <code>true</code> if successful, <code>false</code> if not
     */
    undeleteFile(): boolean;
}

declare interface DocFileDataField {
    hash: string;
    name: string;
    readAccess: string;
    writeAccess: string;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * 
     * @returns String containing the comment
     */
    getValue(): string;
    /**
     * 
     * @param value String containing the new comment
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setValue(value: string): boolean;
}

/**
 * Objects of this class cannot be created directly. You may access a single DocHit by creating a HitResultset, which provides functions to retrieve its hit entries.
 * @see [HitResultset.first]{@link HitResultset#first} [HitResultset.getAt]{@link HitResultset#getAt}
 */
declare interface DocHit {
    /**
     * Each field in a DocHit is mapped to an according property. You can read the value on the basis of the column name. <br><b>Note:</b> Overwriting values in a DocHit is not allowed. Each attempt will raise an exception. To read dates and numbers in DOCUMENTS' storage format, see getTechValueByName().
     */
    columnName: any;
    /**
     * You need the necessary access rights on the archive side. <br><b>Note:</b> This function creates a complete DOCUMENTS image of the archived file, except for the content of attachments. This is a time-consuming workstep. If a script calls this function for each hit in the set, it will not run any faster than a script, which uses a conventional ArchiveFileResultset instead of this class.
     * @returns <code>DocFile</code> or <code>NULL</code>, if failed.
     * @see [getFile]{@link getFile}
     */
    getArchiveFile(): DocFile;
    /**
     * 
     * @param withServer optional boolean value to indicate, if the key should include an "@archiveServerName" appendix
     * @returns The archive file's key as a String, but an empty String, if the hit does not refer to an archive file.
     * @see [getFileId]{@link getFileId}
     */
    getArchiveKey(withServer?: boolean): string;
    /**
     * 
     * @returns String with xml content
     */
    getBlobInfo(): string;
    /**
     * If the file does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be <code>NULL</code>.
     * @returns <code>DocFile</code> or <code>NULL</code>, if failed.
     * @see [getArchiveFile]{@link getArchiveFile}
     */
    getFile(): DocFile;
    /**
     * 
     * @returns The file id as String, if the associated file is an active file, but an empty String otherwise.
     * @see [getArchiveKey]{@link getArchiveKey}
     */
    getFileId(): string;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * 
     * @param colIndex The zero-based index of the column.
     * @returns The local value of the given column as String.
     * @see [getLocalValueByName]{@link getLocalValueByName}
     */
    getLocalValue(colIndex: number): string;
    /**
     * <br><b>Note:</b> Accesing a column by its index is a bit faster than by its name.
     * @param colName The name of the column.
     * @returns The local value of the given column as String.
     * @see [getLocalValue]{@link getLocalValue}
     */
    getLocalValueByName(colName: string): string;
    /**
     * <br><b>Note:</b> For EE.i, the value is an archive identifier in the XML-Server's notation. For EDA it is just the name of a filetype. All values come with an "@Servername" appendix.
     * @returns The schema identifier as a String.
     */
    getSchema(): string;
    /**
     * <br><b>Note:</b> The function returns dates, timestamps and numbers in DOCUMENTS' storage format. (In the DOCUMENTS Manager see menu 'Documents/Settings', dialog page 'Locale/format', group 'Format settings'.) If you prefer JavaScript numbers and dates, simply use the object like an array: myDocHit[colIndex].
     * @param colIndex The zero-based index of the column.
     * @returns The technical value of the given column as a String.
     * @see [getTechValueByName]{@link getTechValueByName}
     */
    getTechValue(colIndex: number): string;
    /**
     * <br><b>Note:</b> Accessing a column by its index is a bit faster than by its name.
     * 
     * <br><b>Note:</b> The function returns dates, timestamps and numbers in DOCUMENTS' storage format. (In the DOCUMENTS Manager see menu 'Documents/Settings', dialog page 'Locale/format', group 'Format settings'.) If you prefer JavaScript numbers and dates, you can simply read the columns as a property DocHit.columnName.
     * @param colName The name of the column.
     * @returns The technical value of the given column as String.
     * @see [getTechValue,DocHit.columnName]{@link getTechValue,DocHit#columnName}
     */
    getTechValueByName(colName: string): string;
    /**
     * 
     * @returns String with key
     */
    getWebKey(): string;
    /**
     * 
     * @returns <code>true</code>, if the associated file is an archive file, <code>false</code> otherwise.
     */
    isArchiveHit(): boolean;
}

/**
 * Only the script-exits "OnSearch" and "FillSearchMask" provide access to such an object. See also Context.getQueryParams().
 * 
 * Scripts can modify the parameters only in the following ways.
 * <ol>
 * <li>A project-related "OnSearch" script may detect in advance, if an individual query won't find any hits in a specified searchable resource. In this case, the script can call removeSource() for each zero-hits resource to reduce the workload on the database and/or archive systems. However the very first listed resource cannot be removed, because it regularly owns the selected hit list. As a result, removeSource() is not suitable for implementing extraordinary permission restrictions. </li>
 * <li>A "OnSearch" script can substitute the relational operator or the value in a search field. This practice is not recommended, because it may make the user find something competely different than he sought for. </li>
 * <li>A "OnSearch" script may cancel some special search requests and submit a custom message. The type (or origin) of the search request determines, if and where this message will be displayed. </li>
 * <li>A "FillSearchMask" script can place default values in the search fields. </li>
 * </ol>
 */
declare interface DocQueryParams {
    /**
     * <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly DIRECT: number;
    /**
     * <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly EXTENDED: number;
    /**
     * In the current release, this type can occur only, if the Documents setting "search field in folder" is enabled. <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly FOLDER_S: number;
    /**
     * Listing the contents of such a folder already triggers a search request. <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly FOLDER_D: number;
    /**
     * <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly REGISTER: number;
    /**
     * This request type originates from the web dialog, which opens, when a user is editing a file and presses a reference fields select button. <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly REFERENCE: number;
    /**
     * (Archive-)FileResultsets, HitResultsets and the SOAP report functions belong to this category. <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly API: number;
    /**
     * <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly FILING_PLAN: number;
    /**
     * <br><b>Note:</b> Quick view URLs with just an id-Parameter do not trigger a search.
     * 
     * <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly QUICK_VIEW: number;
    /**
     * This is a special feature, where a script in the web server process sends a seach request and immediately generates a hit tree from the results. The tabular list is not displayed in this case. <br> This constant is member of constant group: Request Type Constants<br>
     * These constants are equally available in each instance of DocQueryParams and in the constructor object.
     */
    readonly SCRIPT_TREE: number;
    /**
     * This is in other words the number of conditions in the query. <br><b>Note:</b> Attaching a default value to a search field does not fill it in this context. Default values are being stored separately from concrete search values, for technical reasons.
     */
    filledSearchFieldCount: number;
    /**
     * See the enumeration constants in this class. If Documents encounters a request, which it cannot categorize exactly, it will return the nearest match with respect to the server's internal interfaces.
     */
    readonly requestType: number;
    /**
     * This count may include fields from a search mask, which have not been filled in.
     */
    readonly searchFieldCount: number;
    /**
     * <br><b>Note:</b> The value is an empty string, if the query has been prepared without a search mask or with an anonymous mask (controlled by "show in search mask" checkboxes).
     * 
     * Search mask names are unique with regard to a single searchable resource. As soon as multiple resources are involved, the names are often ambiguous, because each resource may supply a search mask with the same name.
     * 
     * To obtain a better identifier, the script may combine the mask's name and the resId of the first selected resource.
     * 
     * However, even this identifier is not always unique. If a user has selected multiple EE.x views and the DOCUMENTS property "UseMainArchives" is undefined or zero, the query does not specify a main resource. DOCUMENTS then passes the RetrievalSource objects with random order. In this case the script cannot distinguish search masks with equal names.
     * @see [getSource,sourceCount]{@link getSource,sourceCount}
     */
    searchMaskName: string;
    readonly sourceCount: number;
    /**
     * 
     * @returns Text of the last error
     */
    getLastError(): string;
    /**
     * <br><b>Note:</b> If the request has been prepared with any kind of searck mask in the background, all available fields of that mask appear in the internal list, not only those, which the user has filled in. The skipEmpty flag provides a simple opportunity to examine only effective search conditions.
     * 
     * Internally generated conditions (for example ACL-filters) cannot be returned by this function.
     * 
     * Attaching a default value to a field does not modify its "empty" state in terms of this function.
     * @param index The index of the desired search field. The valid range is 0 to (filledSearchFieldCount - 1), if the flag <code>skipEmpty</code> is set. Otherwise the range is 0 to (searchFieldCount - 1).
     * @param skipEmpty An optional boolean to treat all empty search fields as non-existing. By default all fields can be examined.
     * @returns A RetrievalField object, which contains a search field name, an operator and (sometimes) a value expression.
     */
    getSearchField(index: number, skipEmpty: boolean): RetrievalField;
    /**
     * 
     * @param index The integer index of the resource in the internal list. Range: 0 to (sourceCount - 1)
     * @returns A RetrievalSource object on success, otherwise <code>null</code>.
     */
    getSource(index: number): RetrievalSource;
    /**
     * <br><b>Note:</b> The access to this function is restricted. Only the "OnSearchScript" can effectively use it.
     * 
     * <br><b>Note:</b> The id can be read from the property RetrievalSource.resId. Valid index values range from 1 to (sourceCount - 1). The resource at index 0 cannot be removed (see the class details). After a succesful call, the sourceCount and the index of each subsequent resource in the list are decreased by one.
     * 
     * The method does not perform type-checking on the refSource parameter. It interprets a value like "12345" always as an index, even when this value has been passed as a string.
     * @param refSource Either the current integer index or the id of the resource.
     * @returns A boolean value, which indicates a succesful call.
     */
    removeSource(refSource: any): boolean;
}

/**
 * 
 * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
 */
declare interface Document {
    readonly bytes: string;
    readonly comment: string;
    readonly encrypted: boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly extension: string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.50n / otrisPORTAL 5.0n
     */
    readonly fullname: string;
    readonly id: string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly name: string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly size: string;
    /**
     * With the necessary rights you can delete a document of the file. Do this only on scratch copies (startEdit, commit) <br><b>Note:</b> It is strictly forbidden to access the Document object after this function has been executed successfully; if you try to access it, your script will fail, because the Document does not exist any longer in DOCUMENTS.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    deleteDocument(): boolean;
    /**
     * The OCR is executed independently of the main OCR property. Meaning OCR will be executed even if the OCR property is not set for that document.
     * 
     * The OCR method will create a searchable pdf-document or a docx-document (not supported by Tesseract). If the type of the current document is an image format like tif, png etc, the created searchable-document will be uploaded into the same register. If the type of the current document already is a pdf/docx, the OCR-pdf will be uploaded as a new version of the current document.
     * 
     * Additionally to the pdf/docx creation, you can get the text content of the document by using the parameters ocrTextFormat and ocrTextTarget. (The properties OCRTextFormat and OCRTextTarget will be ignored in this function. If you specify an ocrTextFormat ("txt" or "alto") the method will return the extracted words in the specified format as a string. If you specify an ocrTextTarget (Registername), then the ocrTextFormat is uploaded to the specified register. The parameters ocrTextFormat and ocrTextTarget are supported for the OCR-Engines Tesseract and Abbyy. If the parameter background is set to <code>true</code> only the OCR flag is set. In that case OCR is executed in the background. As default, background is set to <code>false</code> and OCR is executed immediately. Usually the job checks if the document contains text before executing OCR. If you want OCR to be executed even though the document contains text, set the parameter force to <code>true</code>. If the check is performed, the Property OCRMinWordCount will be taken into account.
     * @param ocrOutputFormat String "pdf" or "docx", see main description
     * @param ocrTextFormat String "txt" or "alto", see main description
     * @param ocrTextTarget String with the registername, where the ocrText will be uploaded
     * @param background <code>false</code> default, OCR will be executed immediately, <code>true</code> OCR will be executed later in a background job
     * @param force <code>false</code> default, OCR will be sipped, if document is text, <code>true</code> OCR will be executed in any case
     * @returns <code>ocrText</code> or an empty string, in case of an error, an exception will be thrown
     * @see [Document.extractText]{@link Document#extractText}
     */
    doOCR(ocrOutputFormat?: string, ocrTextFormat?: string, ocrTextTarget?: string, background?: boolean, force?: boolean): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 4.0 (new parameter filePath)
     * <br><b>Since:</b>DOCUMENTS 4.0d (new parameter version)
     * @param filePath Optional string specifying where the downloaded Document to be stored. <br>
     *        Note: A file path containing special characters can be modified due to the encoding problem. The modified file path will be returned.
     * @param version Optional string value specifying which version of this Document to be downloaded (e.g. "2.0"). The default value is the active version. <br>
     *        Note: This parameter is ignored for an archive document.
     * @returns String containing full path and file name of the downloaded Document, an empty string in case of any error.
     */
    downloadDocument(filePath?: string, version?: string): string;
    /**
     * A appropriate extract program has to be defined in the documents.ini: $extracttext.pdf
     * @param options String containing additional options that will passed to the extract program.
     * @returns <code>String</code> with the extracted text, an exception in case of any error.
     */
    extractText(options?: string): string;
    /**
     * The different document types of your documents require the appropriate PDF filter programs to be installed and configured in DOCUMENTS.
     * @returns <code>String</code> with file path of the PDF, an empty string in case of any error.
     */
    getAsPDF(): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the Document object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the Document object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * 
     * @returns Register object or <code>null</code> if missing
     */
    getRegister(): Register;
    /**
     * These hash functions are supported:
     * <ul>
     * <li><code>sha1</code></li>
     * <li><code>sha224</code></li>
     * <li><code>sha256</code></li>
     * <li><code>sha384</code></li>
     * <li><code>sha512</code></li>
     * <li><code>md4</code></li>
     * <li><code>md5</code></li>
     * <li><code>whirlpool</code></li>
     * <li><code>ripemd160</code></li>
     * </ul>
     * @param hashfunction String containing the name of the hash function.
     * @param version Optional string value specifying which version of this Document to be hashed (e.g. "2.0"). The default value is the active version. <br>
     *        Note: This parameter is ignored for an archive document.
     * @returns String with the hash value of the Document, an empty string in case of any error.
     * @see [util.hash]{@link util#hash}
     */
    hash(hashfunction: string, version?: string): string;
    /**
     * If the OCR flag is set, the document must be processed by the OCR engine. After finishing the OCR process the flag is set back.
     * @returns <code>true</code> if flag is set, <code>false</code> if not
     */
    hasOcrFlag(): boolean;
    /**
     * 
     * @param minWords Number of words, default 5.
     * @param version Optional string value specifying which version of this document to be read (e.g. "2.0").
     * @returns
     */
    hasWords(minWords?: number, version?: string): boolean;
    /**
     * With the necessary rights you can move the Document to another document Register of the file. <br><b>Note:</b> This operation is not available for a Document located in an archive file.
     * @param regObj The Register this Document will be moved to.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    moveToRegister(regObj: Register): boolean;
    /**
     * 
     * @param version Optional string value specifying which version of this document to be read (e.g. "2.0"). The default version is the active version. <br>
     *        Note: This parameter is ignored for an archive document.
     * @returns String with content of the document; empty string in case of errors.
     */
    readAsString(version?: string): string;
    /**
     * This method is only allowed if at the filetype the option <code>'automatic document indexing'</code> is enabled.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    reindexBlob(): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * This method is only allowed for documents at a scratch copy (<code>startEdit</code>, <code>commit</code>).
     * @param nameWithExt String containing the document name with extension.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setDocumentName(nameWithExt: string): boolean;
    /**
     * <br><b>Note:</b> After successful upload of the Document the source file on the server's directory structure is removed!
     * @param sourceFilePath String containing the path of the desired file to be uploaded. <br>
     *        Note: Backslashes contained in the filepath must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!
     * @param versioning Optional flag: <code>true</code> for versioning the Document and <code>false</code> for replacing it.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    uploadDocument(sourceFilePath: string, versioning?: boolean): boolean;
}

/**
 * 
 * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
 */
declare interface DocumentIterator {
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns Document or <code>null</code> in case of an empty DocumentIterator
     */
    first(): Document;
    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns Document or <code>null</code> if end of DocumentIterator is reached.
     */
    next(): Document;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns integer value with the amount of Document objects in the DocumentIterator
     */
    size(): number;
}

/**
 * DOMAttrs cannot be created directly. This applies to almost all kinds of DOMNodes.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class conforms to the Attribute interface of DOM level 2.
 * <br><b>Since:</b>DOCUMENTS 5.0f (DOM level 2)
 */
declare interface DOMAttr {
    /**
     * This property is readonly.
     */
    name: string;
    /**
     * This property is readonly.
     */
    ownerElement: DOMElement;
    /**
     * The flag is <code>true</code>, if the value was explicitly contained in a parsed document. The flag is also <code>true</code>, if the script has set the property "value" of this DOMAttr object. The flag is <code>false</code>, if the value came from a default value declared in a DTD. The flag is readonly.
     */
    specified: boolean;
    /**
     * Character and general entity references are replaced with their values.
     */
    value: string;
}

/**
 * An object of this class can represent either a text node, a comment node or a CDATA section. Scripts should use the inherited nodeType attribute to distinguish these node types.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class covers the CharacterData interface of DOM level 2. The W3C has defined several derived interfaces, namely "Text", "Comment" and "CDATASection". With respect to code size this API omits the corresponding subclasses "DOMText", "DOMComment" and "DOMCDATASection". The only additional method "DOMText.splitText()" has been moved into this class.
 * 
 * This simplification has got only one little disadvantage. Scripts cannot distinguish the three node types using the JavaScript <code>instanceof</code> operator. They must use the nodeType attribute instead.
 */
declare interface DOMCharacterData {
    data: string;
    /**
     * This property is readonly.
     */
    length: number;
    /**
     * 
     * @param arg The string to append.
     * @returns
     * @throws
     */
    appendData(arg: string): void;
    /**
     * 
     * @param offset The zero-based position of the first character to delete.
     * @param count The number of characters to delete.
     * @returns
     * @throws
     */
    deleteData(offset: number, count: number): void;
    /**
     * 
     * @param offset A zero-based position. On return, the inserted string will begin here.
     * @param arg The string to insert.
     * @returns
     * @throws
     */
    insertData(offset: number, arg: string): void;
    /**
     * 
     * @param offset The zero-based position of the first character to be replaced.
     * @param count The number of characters to replace.
     * @param arg The string replacing the old one.
     * @returns
     * @throws
     */
    replaceData(offset: number, count: number, arg: string): void;
    /**
     * The new node becomes the next sibling of this node in the tree, and it has got the same nodeType. <br><b>Note:</b> Future releases of the API may expose this method only in a new subclass DOMText. See also the W3C conformity remarks in the class description. If a script calls this method on a "Comment" node. it will trigger a JavaScript error, because "Comment" is not derived from "Text" in the standard API.
     * @param offset The zero-based index of the character, which will become the first character of the new node.
     * @returns The new text node.
     * @throws
     */
    splitText(offset: number): DOMCharacterData;
    /**
     * 
     * @param offset The zero-based index of the first character to extract.
     * @param count The number of characters to extract.
     * @returns The requested substring.
     * @throws
     */
    substringData(offset: number, count: number): string;
}

/**
 * The DOMDocument is the root of a DOM tree.<br><br>
 * The constructor of this class always creates an empty document structure. Use the class DOMParser to obtain the structure of an existing XML. To create any new child nodes, a script must call the appropriate create method of the DOMDocument. It is not possible to create child nodes standalone.
 * 
 * After a DOMDocument has been deleted by the scripting engine's garbage collector, accessing any nodes and lists of that document may issue an error. You should avoid code like the following.
 * 
 * ```
 * function buildSomeElement()
 * {
 * var domDoc = new DOMDocument("root");
 * var someElement = domDoc.createElement("Test");
 * // This is an error: Some operations on the DOMElement may no
 * // longer work, when the owning DOMDocument has already died.
 * return someElement;
 * }
 * ```
 * 
 * 
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class covers most of the Document interface of DOM level 2, but the following properties and functions have not been implemented.
 * <ul>
 * <li>DOMImplementation implementation</li>
 * </ul>
 * <br><b>Since:</b>DOCUMENTS 5.0f (DOM level 2 core support)
 */
declare class DOMDocument {
    /**
     * <br><b>Note:</b> The namespaceURI parameter is mandatory, if rootElementName includes a namespace prefix. Otherwise it is optional. The optional doctype parameter can be used to place a Document Type Declaration in the new document, which may refererence an external DTD. The constructor fails, if doctype is already owned by another document. Otherwise the new document takes exclusive ownership of the passed object and doctype.ownerDocument is set to the new document.
     * <br><b>Since:</b>DOCUMENTS 4.0c
     * <br><b>Since:</b>DOCUMENTS 5.0f (parameters namespaceURI and doctype)
     * @param rootElementName The (qualified) name for the document element.
     * @param namespaceURI The namespace URI of the document element to create. Can be <code>null</code> for documents without namespaces.
     * @param doctype An optional DOMDocumentType object. See remarks
     */
    constructor(rootElementName: string, namespaceURI: string, doctype: DOMDocumentType);

    /**
     * For documents without a document type declaration the value is <code>null</code>. This property is readonly.
     * 
     * <br><b>Note:</b> The DOM Level 2 does not support editing the Document Type Declaration. doctype cannot be altered in any way, including through the use of methods inherited from the DOMNode interface.
     */
    doctype: DOMDocumentType;

    /**
     * This property is readonly. <br><b>Note:</b> Unlike written in older versions of this document, the documentElement is not necessarily the first child of the DOMDocument. A DocumentType node, for example, may precede it in the list of direct children.
     */
    documentElement: DOMElement;

    /**
     * 
     * @param name The name of the attribute.
     * @returns A new DOMAttr object, which may initially appear anywhere or nowhere in the DOM tree.
     * @throws
     * @see [DOMElement.setAttributeNodetoplacethenodewithinthetree.]{@link DOMElement#setAttributeNodetoplacethenodewithinthetree#}
     */
    createAttribute(name: string): DOMAttr;

    /**
     * <br><b>Note:</b> The new object is initialized with the following attributes.
     * <table border=1 cellspacing=0>
     * <tr><td>Attribute </td><td>Value </td></tr>
     * <tr><td>DOMNode.nodeName</td><td>qualifiedName </td></tr>
     * <tr><td>DOMNode.namespaceURI</td><td>namespaceURI </td></tr>
     * <tr><td>DOMNode.prefix</td><td>prefix, extracted from qualifiedName, or <code>null</code> if there is no prefix </td></tr>
     * <tr><td>DOMNode.localName</td><td>local name, extracted from qualifiedName </td></tr>
     * <tr><td>DOMAttr.name</td><td>qualifiedName </td></tr>
     * <tr><td>DOMNode.nodeValue</td><td>the empty string </td></tr>
     * </table>
     * @param namespaceURI The namespace URI (String) of the attribute to create
     * @param qualifiedName The qualified name (String) of the attribute to instantiate.
     * @returns A new DOMAttr object.
     * @throws
     */
    createAttributeNS(namespaceURI: string, qualifiedName: string): DOMElement;

    /**
     * <b>Remarks about W3C conformity</b>
     * 
     * The W3C specifies the return type as "CDATASection". Considering code size the actual API omits a class CDATASection and presents the only additional member (splitText(), inherited from "Text") directly in the second level base class. Scripts can examine DOMNode.nodeType to distinguish different types of character data, if necessary.
     * @param data The data for the node
     * @returns A new DOMCharacterData object, which may initially appear anywhere or nowhere in the DOM tree.
     * @throws
     * @see [DOMNode.appendChildtoplacethenodewithinthetree.]{@link DOMNode#appendChildtoplacethenodewithinthetree#}
     */
    createCDATASection(data: string): DOMCharacterData;

    /**
     * <b>Remarks about W3C conformity</b>
     * 
     * The W3C specifies the return type as "Comment". Considering code size the actual API omits a class DOMComment, which would not get any more members apart from the inherited ones. Scripts can examine DOMNode.nodeType to distinguish different types of character data, if necessary.
     * @param data The data for the node
     * @returns A new DOMCharacterData object, which may initially appear anywhere or nowhere in the DOM tree.
     * @see [DOMNode.appendChildtoplacethenodewithinthetree.]{@link DOMNode#appendChildtoplacethenodewithinthetree#}
     */
    createComment(data: string): DOMCharacterData;

    /**
     * <b>Remarks about W3C conformity</b>
     * 
     * The interface "DocumentFragment" in the "W3C DOM level 2 core" is virtually the same as "Node". This API omits a separate class "DOMDocumentFragment" to avoid code duplication. If a script needs to distinguish document fragments from other nodes, it can compare DOMNode.nodeType with the constant DOMNode.DOCUMENT_FRAGMENT_NODE.
     * @returns A DOMNode object, representing the new DocumentFragment
     */
    createDocumentFragment(): DOMNode;

    /**
     * 
     * @param tagName The name of the element.
     * @returns A new DOMElement, which may initially appear anywhere or nowhere in the DOM tree.
     * @throws
     * @see [DOMNode.appendChildtoplacetheelementwithinthetree.]{@link DOMNode#appendChildtoplacetheelementwithinthetree#}
     */
    createElement(tagName: string): DOMElement;

    /**
     * <br><b>Note:</b> The new element is initialized with the following attributes.
     * <table border=1 cellspacing=0>
     * <tr><td>Attribute </td><td>Value </td></tr>
     * <tr><td>DOMNode.nodeName</td><td>qualifiedName </td></tr>
     * <tr><td>DOMNode.namespaceURI</td><td>namespaceURI </td></tr>
     * <tr><td>DOMNode.prefix</td><td>prefix, extracted from qualifiedName, or <code>null</code> if there is no prefix </td></tr>
     * <tr><td>DOMNode.localName</td><td>local name, extracted from qualifiedName </td></tr>
     * <tr><td>DOMElement.tagName</td><td>qualifiedName </td></tr>
     * </table>
     * @param namespaceURI The namespace URI (String) of the element to create
     * @param qualifiedName The qualified name (String) of the element to instantiate.
     * @returns A new DOMElement object.
     * @throws
     */
    createElementNS(namespaceURI: string, qualifiedName: string): DOMElement;

    /**
     * In addition, if the referenced entity is known, the child list of the EntityReference node is made the same as that of the corresponding Entity node. <br><b>Note:</b> If any descendant of the Entity node has an unbound namespace prefix, the corresponding descendant of the created EntityReference node is also unbound (its namespaceURI is null). The DOM Level 2 does not support any mechanism to resolve namespace prefixes.
     * 
     * <b>Remarks about W3C conformity</b>
     * 
     * The interface "EntityReference" in the "W3C DOM level 2 core" is virtually the same as "Node". This API omits a separate class "DOMEntityReference" to avoid code duplication. If a script needs to distinguish entity references from other nodes, it can compare DOMNode.nodeType with the constant DOMNode.ENTITY_REFERENCE_NODE.
     * @param name The name of the entity to reference.
     * @returns A DOMNode object representing the new EntityReference
     * @throws
     */
    createEntityReference(name: string): DOMNode;

    /**
     * 
     * @param target The target part of the processing instruction.
     * @param data The data for the node.
     * @returns DOMProcessingInstruction The new object
     * @throws
     */
    createProcessingInstruction(target: string, data: string): DOMProcessingInstruction;

    /**
     * <b>Remarks about W3C conformity</b>
     * 
     * The W3C specifies the return type as "Text". Considering code size the actual API omits a class DOMText and presents the only additional member (splitText()) directly in the base class. Scripts can examine DOMNode.nodeType to distinguish different types of character data, if necessary.
     * @param data The data for the node
     * @returns A new DOMCharacterData object, which may initially appear anywhere or nowhere in the DOM tree.
     * @see [DOMNode.appendChildtoplacethenodewithinthetree.]{@link DOMNode#appendChildtoplacethenodewithinthetree#}
     */
    createTextNode(data: string): DOMCharacterData;

    /**
     * Returns <code>null</code> if no such element exists. Behavior is not defined if more than one element has this ID. <br><b>Note:</b> The DOM implementation must have information that says which attributes are of type ID. Attributes with the name "ID" are not of type ID unless so defined. Implementations that do not know whether attributes are of type ID or not are expected to return null.
     * @param elementId The unique id value for an element.
     * @returns The matching element.
     */
    getElementById(elementId: string): DOMElement;

    /**
     * The order of the elements in the returned list corresponds to a preorder traversal of the DOM tree.
     * @param tagName The name to match on. The special value "*" matches all tags.
     * @returns A dynamic list of the found elements.
     * @see [DOMNodeList.]{@link DOMNodeList#}
     */
    getElementsByTagName(tagName: string): DOMNodeList;

    /**
     * The order of the elements in the returned list corresponds to a preorder traversal of the DOM tree.
     * @param namespaceURI The namespace URI of the elements to match on. The special value "*" matches all namespaces.
     * @param localName The local name of the elements to match on. The special value "*" matches all local names.
     * @returns A new DOMNodeList object containing all the matched DOMElements.
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;

    /**
     * The returned node has no parent. Its parentNode is <code>null</code>. The source node is not altered or removed from the original document. This method creates a new copy of the source node. Additional information is copied as appropriate to the nodeType. <br><b>Note:</b> Some node types cannot be imported (a whole DOMDocument for example). Copying child nodes may be restricted or mandatory for a specific node type.
     * 
     * Further Reading: http://www.w3.org/TR/DOM-Level-2-Core/core.html#Core-Document-importNode
     * @param source The node to copy.
     * @param deep Boolean value to request a deep copy with child nodes, if desired.
     * @returns The imported node that belongs to this document.
     * @throws
     */
    importNode(source: DOMNode, deep: boolean): DOMNode;

}

/**
 * This class describes a Document Type Declaration associated with a DOMDocument.<br><br>
 * Each DOMDocument has a doctype attribute whose value is either <code>null</code> or a DOMDocumentType object. The DOMDocumentType class provides an interface to the list of entities that are defined for the document, and little else. The DOM Level 2 doesn't support editing DocumentType nodes.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * DOCUMENTS allows creating DOMDocumentType objects directly with <code>new</code>. The constructor function replaces the W3C recommended function <code>DOMImplementation.createDocumentType()</code>. Nodes listed in the notations property reuse the prototype of DOMEntity. Otherwise this class conforms to the DocumentType interface in the W3C DOM level 2 specification.
 */
declare class DOMDocumentType {
    /**
     * Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur. It is expected that a future version of the DOM will provide a way for populating a DocumentType.
     * 
     * <br><b>Note:</b> The returned object can be forwarded to the DOMDocument constructor to create a document with a reference to an external DTD. Otherwise there is actually no benefit of creating nodes of this type directly.
     * <br><b>Since:</b>DOCUMENTS 5.0f
     * @param qualifiedName String with the qualified name of the document type to be created.
     * @param publicId String with the external subset public identifier.
     * @param systemId String with the external subset system identifier.
     */
    constructor(qualifiedName: string, publicId: string, systemId: string);

    /**
     * Parameter entities are not contained. This property is readonly. <br><b>Note:</b> Duplicates are discarded. For example in:
     * 
     * ```
     * <!DOCTYPE ex SYSTEM "ex.dtd" [
     * <!ENTITY foo "foo">
     * <!ENTITY bar "bar">
     * <!ENTITY bar "bar2">
     * <!ENTITY % baz "baz">
     * ]>
     * <ex/>
     * ```
     * 
     * the interface provides access to foo and the first declaration of bar but not the second declaration of bar or baz. Every node in this map also is an instance of DOMEntity.
     * 
     * The DOM Level 2 does not support editing entities, therefore entities cannot be altered in any way.
     */
    entities: DOMNamedNodeMap;

    /**
     * This property is readonly. <br><b>Note:</b> The actual content returned depends on how much information is available to the implementation. This may vary depending on various parameters, including the XML processor used to build the document.
     */
    internalSubset: string;

    /**
     * This property is readonly.
     */
    name: string;

    /**
     * This property is readonly. <br><b>Note:</b> Duplicates are discarded. Every node in this map also implements the Notation interface. The DOM Level 2 does not support editing notations, therefore notations cannot be altered in any way.
     * 
     * <b>Remarks about W3C conformity</b>
     * 
     * This API omits a separate class "DOMNotation" to avoid code duplication. Differing from the W3C standard the nodes in the returned map are DOMEntity instances, having the attribute DOMEntity.notationName set to <code>undefined</code>.
     * 
     * To distinguish notation nodes from other nodes scripts can compare the attribute DOMNode.nodeType with the constant DOMNode.NOTATION_NODE.
     */
    notations: DOMNamedNodeMap;

    /**
     * This property is readonly.
     */
    publicId: string;

    /**
     * This property is readonly.
     */
    systemId: string;

}

/**
 * DOMElements cannot be created directly. This applies to almost all kinds of DOMNodes.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class conforms to the Element interface of DOM level 2.
 * <br><b>Since:</b>DOCUMENTS 5.0f (DOM level 2)
 */
declare interface DOMElement {
    /**
     * This property is readonly.
     */
    tagName: string;
    /**
     * 
     * @param name The name of the attribute
     * @returns The atrribute's value or the empty string, if the attribute is not specified and has not got a default value.
     */
    getAttribute(name: string): string;
    /**
     * 
     * @param name The attribute's name
     * @returns The object, which represents the attribute in the DOM. If no attribute of the given name exists, the value is <code>null</code>.
     */
    getAttributeNode(name: string): DOMAttr;
    /**
     * 
     * @param namespaceURI The namespace URI of the attribute to retrieve.
     * @param localName The local name of the attribute to retrieve.
     * @returns The DOMAttr node with the specified local name and namespace URI or <code>null</code> if there is no such attribute.
     */
    getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr;
    /**
     * 
     * @param namespaceURI The namespace URI of the attribute to retrieve.
     * @param localName The local name of the attribute to retrieve.
     * @returns The attribute's value as a string, or the empty string if that attribute does not have a specified or default value.
     */
    getAttributeNS(namespaceURI: string, localName: string): string;
    /**
     * The order of the elements in the returned list corresponds to a preorder traversal of the DOM tree.
     * @param tagName The name to match on. The special value "*" matches all tags.
     * @returns A dynamic list of the found elements.
     * @see [DOMNodeList.]{@link DOMNodeList#}
     */
    getElementsByTagName(tagName: string): DOMNodeList;
    /**
     * The elements are listed in the order in which they are encountered in a preorder traversal of this element tree.
     * @param namespaceURI The namespace URI of the elements to match on. The special value "*" matches all namespaces.
     * @param localName The local name of the elements to match on. The special value "*" matches all local names.
     * @returns A new DOMNodeList object containing all the matched DOMElements.
     */
    getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList;
    /**
     * 
     * @param name The name of the attribute to look for.
     * @returns <code>true</code> if an attribute with the given name is specified on this element or has a default value, <code>false</code> otherwise.
     */
    hasAttribute(name: string): boolean;
    /**
     * 
     * @param namespaceURI The namespace URI of the attribute to look for.
     * @param localName The local name of the attribute to look for.
     * @returns <code>true</code> if an attribute with given parameters is specified on this element or has a default value, <code>false</code> otherwise.
     */
    hasAttributeNS(namespaceURI: string, localName: string): boolean;
    /**
     * 
     * @param name The attribute's name
     * @returns
     * @throws
     */
    removeAttribute(name: string): void;
    /**
     * 
     * @param oldAttr The attribute object to remove
     * @returns The removed attribute node.
     * @throws
     */
    removeAttributeNode(oldAttr: DOMAttr): DOMAttr;
    /**
     * If the removed attribute has a default value it is immediately replaced. The replacing attribute has the same namespace URI and local name, as well as the original prefix.
     * @param namespaceURI The namespace URI of the attribute to remove.
     * @param localName The local name of the attribute to remove.
     * @returns No return value.
     * @throws
     */
    removeAttributeNS(namespaceURI: string, localName: string): any;
    /**
     * If an attribute of the given name exists, the method only updates its value. Otherwise it creates the attribute.
     * @param name The attribute's name
     * @param value The new value of the attribute
     * @returns
     * @throws
     */
    setAttribute(name: string, value: string): void;
    /**
     * 
     * @param newAttr The DOMAttr object, which defines the attribute to add or replace.
     * @returns The formerly attached DOMAttr, if the call has replaced an attribute with the same name. Otherwise the method returns <code>null</code>.
     * @throws
     */
    setAttributeNode(newAttr: DOMAttr): DOMAttr;
    /**
     * If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.
     * @param newAttr The DOMAttr node to add to the attribute list.
     * @returns If the newAttr replaces an existing attribute with the same local name and namespace URI, the replaced DOMAttr node is returned, otherwise <code>null</code> is returned.
     * @throws
     */
    setAttributeNodeNS(newAttr: DOMAttr): DOMAttr;
    /**
     * If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed to be the prefix part of the qualifiedName, and its value is changed to be the value parameter. <br><b>Note:</b> The assigned value is a simple string; it is not parsed as it is being set. So any markup (such as syntax to be recognized as an entity reference) is treated as literal text. In order to assign an attribute value that contains entity references, the user must create a DOMAttr node plus any Text and EntityReference nodes, build the appropriate subtree, and use setAttributeNodeNS() or setAttributeNode() to assign it as the value of an attribute.
     * @param namespaceURI The namespace URI of the attribute to create or alter.
     * @param qualifiedName The qualified name of the attribute to create or alter.
     * @param value The value to set in string form.
     * @returns No return value.
     * @throws
     */
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): any;
}

/**
 * If the inherited attribute DOMNode.nodeType equals DOMNode.ENTITY_NODE the object represents an entity, either parsed or unparsed, in an XML document. This models the entity itself not the entity declaration.
 * 
 * The DOMNode.nodeName attribute contains the name of the entity.
 * 
 * If the inherited attribute DOMNode.nodeType equals DOMNode.NOTATION_NODE the object represents a notation declared in the DTD. A notation either declares, by name, the format of an unparsed entity (according to section 4.7 of the XML 1.0 specification), or is used for formal declaration of processing instruction targets (according to section 2.6 of the XML 1.0 specification). The DOMNode.nodeName attribute is set to the declared name of the notation.
 * 
 * <br><b>Note:</b> If an entity contains an unbound namespace prefix, the namespaceURI of the corresponding node in the Entity node subtree is null. The same is true for EntityReference nodes that refer to this entity, when they are created using the DOMDocument.createEntityReference() method. The DOM Level 2 does not support any mechanism to resolve namespace prefixes.
 * 
 * <br><b>Note:</b> An XML processor may choose to completely expand entities before the structure model is passed to the DOM. In this case there will be no EntityReference nodes in the document tree.
 * 
 * XML does not mandate that a non-validating XML processor read and process entity declarations made in the external subset or declared in external parameter entities. This means that parsed entities declared in the external subset need not be expanded by some classes of applications, and that the replacement value of the entity may not be available. When the replacement value is available, the corresponding Entity node's child list represents the structure of that replacement text. Otherwise, the child list is empty.
 * 
 * The DOM Level 2 does not support editing Entity nodes; if a user wants to make changes to the contents of an Entity, every related EntityReference node has to be replaced in the structure model by a clone of the Entity's contents, and then the desired changes must be made to each of those clones instead.
 * 
 * Entity nodes and all their descendants are readonly. Entity nodes and notation nodes do not have any parent.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * This API omits a separate class "DOMNotation" to avoid code duplication. Differing from the W3C standard the DOMEntity class is also used for notation nodes. To distinguish notation nodes from other nodes scripts can compare the attribute DOMNode.nodeType with the constant DOMNode.NOTATION_NODE.
 */
declare interface DOMEntity {
    /**
     * For parsed entities this is <code>null</code>. For notation nodes the value is <code>undefined</code>.
     * 
     * This property is readonly.
     */
    notationName: string;
    /**
     * If the public identifier was not specified, this is <code>null</code>. This property is readonly.
     */
    publicId: string;
    /**
     * If the system identifier was not specified, this is <code>null</code>. This property is readonly.
     */
    systemId: string;
}

/**
 * <b>Remarks about W3C conformity</b>
 * 
 * The class implements the DOMException exception type with the error codes specified in DOM level 2.
 */
declare interface DOMException {
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INDEX_SIZE_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    DOMSTRING_SIZE_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    HIERARCHY_REQUEST_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    WRONG_DOCUMENT_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INVALID_CHARACTER_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    NO_DATA_ALLOWED_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    NO_MODIFICATION_ALLOWED_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    NOT_FOUND_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    NOT_SUPPORTED_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INUSE_ATTRIBUTE_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INVALID_STATE_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    SYNTAX_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INVALID_MODIFICATION_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    NAMESPACE_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    INVALID_ACCESS_ERR: number;
    /**
     * <br> This constant is member of constant group: Error Code Constants<br>
     * All these constants are also available as properties of the constructor.
     */
    VALIDATION_ERR: number;
    /**
     * See the error constants in this class.
     */
    readonly code: number;
    readonly message: string;
}

/**
 * The attributes of a DOMElement are organized in a DOMNamedNodeMap. See DOMElement.attributes. The attached nodes can be accessed either by the name or by an integer index. When using an index, the output order of the nodes is not determined. Objects of this class cannot be created directly.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * This class conforms to the NamedNodeMap interface of DOM level 2.
 * <br><b>Since:</b>DOCUMENTS 5.0f (DOM level 2)
 */
declare interface DOMNamedNodeMap {
    /**
     * This property is readonly.
     */
    length: number;
    /**
     * 
     * @param name The name.
     * @returns The node, respectively <code>null</code>, if no node with the name is in the map.
     */
    getNamedItem(name: string): DOMNode;
    /**
     * 
     * @param namespaceURI The namespace URI of the node to retrieve.
     * @param localName The local name of the node to retrieve.
     * @returns A DOMNode (of any type) with the specified local name and namespace URI, or <code>null</code> if they do not identify any node in this map.
     */
    getNamedItemNS(namespaceURI: string, localName: string): DOMNode;
    /**
     * This is useful only to iterate over all nodes in the map. <br><b>Note:</b> It is also possible to access the nodes using square brackets, as if the object would be an array.
     * @param index the zero based index of the element.
     * @returns The requested DOMNode Object. If the index is invalid, the method returns <code>null</code>.
     */
    item(index: number): DOMNode;
    /**
     * 
     * @param name The unique node name.
     * @returns The removed node.
     * @throws
     */
    removeNamedItem(name: string): DOMNode;
    /**
     * <br><b>Note:</b> A removed attribute may be known to have a default value when this map contains the attributes attached to an element, as returned by the DOMNode.attributes attribute. If so, an attribute immediately appears containing the default value as well as the corresponding namespace URI, local name, and prefix when applicable.
     * @param namespaceURI The namespace URI of the node to remove.
     * @param localName The local name of the node to remove.
     * @returns The node removed from this map, if a node with such a local name and namespace URI exists.
     * @throws
     */
    removeNamedItemNS(namespaceURI: string, localName: string): DOMNode;
    /**
     * 
     * @param arg The node to add. The name for indexing is the value of the attribute DOMNode.nodeName,
     * @returns If a node with the same name has already been added, the method removes that node and returns it. Otherwise it returns <code>null</code>.
     * @throws
     */
    setNamedItem(arg: DOMNode): DOMNode;
    /**
     * If a node with that namespace URI and that local name is already present in this map, it is replaced by the new one.
     * @param arg A node to store in this map. The node will later be accessible using the value of its namespaceURI and localName attributes.
     * @returns If the new node replaces an existing node the replaced node is returned, otherwise <code>null</code> is returned.
     * @throws
     */
    setNamedItemNS(arg: DOMNode): DOMNode;
}

/**
 * DOMNodes cannot be created with <code>new</code>. Different create methods of DOMDocument can be used to create different types of nodes. As an exception the subclasses DOMDocument and DOMDocumentType have a constructor. <br><b>Note:</b> Accessing any node may generate a JavaScript error, when the owning document has been deleted or "garbage collected". See the negative example at class DOMDocument.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class widely conforms to the Node interface of DOM level 2. Only the function isSupported() does not work as expected. It should not be used.
 * 
 * The above-mentioned constructors of DOMDocument and DOMDocumentType are non-standard. They are a simplifying substitute of the unsupported standard interface <code>DOMImplementation</code>.
 * <br><b>Since:</b>DOCUMENTS 5.0f (DOM level 2)
 */
declare interface DOMNode {
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    ELEMENT_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    ATTRIBUTE_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    TEXT_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    CDATA_SECTION_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    ENTITY_REFERENCE_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    ENTITY_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    PROCESSING_INSTRUCTION_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    COMMENT_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    DOCUMENT_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    DOCUMENT_TYPE_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    DOCUMENT_FRAGMENT_NODE: number;
    /**
     * <br> This constant is member of constant group: Node Type Constants<br>
     * These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor, so it is possible to read them in the style .
     */
    NOTATION_NODE: number;
    attributes: DOMNamedNodeMap;
    childNodes: DOMNodeList;
    firstChild: DOMNode;
    lastChild: DOMNode;
    /**
     * This property is readonly. <br><b>Note:</b> For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such as DOMDocument.createElement(), this is always null.
     */
    localName: string;
    /**
     * This property is readonly. <br><b>Note:</b> This is not a computed value that is the result of a namespace lookup based on an examination of the namespace declarations in scope. It is merely the namespace URI given at creation time.
     * 
     * 
     * Per the "Namespaces in XML" Specification an attribute does not inherit its namespace from the element it is attached to. If an attribute is not explicitly given a namespace, it simply has no namespace.
     * 
     * <br><b>Note:</b> For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such as DOMDocument.createElement(), this is always null.
     */
    namespaceURI: string;
    nextSibling: DOMNode;
    nodeName: string;
    nodeType: number;
    /**
     * For several node types, the value is constantly an empty string. See also the [W3C documentation in the internet]{@link http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html}.
     */
    nodeValue: string;
    ownerDocument: DOMDocument;
    parentNode: DOMNode;
    /**
     * <br><b>Note:</b> Note that setting this attribute, when permitted, changes the nodeName attribute, which holds the qualified name, as well as the DOMElement.tagName and DOMAttr.name attributes, when applicable.
     * 
     * 
     * Note also that changing the prefix of an attribute that is known to have a default value, does not make a new attribute with the default value and the original prefix appear, since the namespaceURI and localName do not change.
     * 
     * <br><b>Note:</b> For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such as DOMDocument.createElement(), this is always null.
     */
    prefix: string;
    previousSibling: DOMNode;
    /**
     * 
     * @param newChild The DOMNode to append.
     * @returns The node added.
     * @throws
     */
    appendChild(newChild: DOMNode): DOMNode;
    /**
     * <br><b>Note:</b> The returned node initially has not got a parent.
     * @param deep <code>true</code> to clone also the whole subtree, <code>false</code> to clone only the node (including the attributes, if it is a DOMElement).
     * @returns The copy. The actual type equals the type of <code>this</code>.
     * @see [DOMDocument.importNodetocopynodesfromanotherdocument.]{@link DOMDocument#importNodetocopynodesfromanotherdocument#}
     */
    cloneNode(deep: boolean): DOMNode;
    /**
     * 
     * @returns
     */
    hasAttributes(): boolean;
    /**
     * 
     * @returns
     */
    hasChildNodes(): boolean;
    /**
     * 
     * @param newChild The DOMNode to insert.
     * @param refChild An existing DOMNode, which already is a child of <code>this</code>, and which shall become the next sibling of <code>newChild</code>.
     * @returns The node inserted.
     * @throws
     */
    insertBefore(newChild: DOMNode, refChild: DOMNode): DOMNode;
    /**
     * This method restructures a DOMDocument (or a subtree of it) as if the document was written to a string and reparsed from it. Subsequent "Text" nodes without any interjacent markup are combined into one node, for example.
     * @returns
     */
    normalize(): void;
    /**
     * 
     * @param oldChild The child DOMNode being removed.
     * @returns The node removed.
     * @throws
     */
    removeChild(oldChild: DOMNode): DOMNode;
    /**
     * 
     * @param newChild The DOMNode to insert.
     * @param oldChild The child DOMNode being replaced.
     * @returns The node replaced.
     * @throws
     */
    replaceChild(newChild: DOMNode, oldChild: DOMNode): DOMNode;
}

/**
 * These lists always reflect the actual state of the DOM tree, which can differ from that state, when the list has been created. Getting the nodes from the list works with an integer index in square brackets, as if the list object would be an Array. DOMNodeLists cannot be created directly. Some methods or properties of DOMNode and its subclasses can create them.
 * 
 * <b>Remarks about W3C conformity</b>
 * 
 * The class covers the NodeList interface of DOM level 2.
 */
declare interface DOMNodeList {
    length: number;
    /**
     * This is just the same as using the square brackets on the object.
     * @param index The zero-based position of the requested element
     * @returns The DOMNode at the requested index. In the case of an invalid index the return value is <code>null</code>.
     */
    item(index: number): DOMNode;
}

/**
 * This class provides basic methods to parse or synthesize XML documents using the Document Object Model (DOM).
 */
declare class DOMParser {
    constructor();

    /**
     * <br> This constant is member of constant group: Error Constants<br>
     * In contrast to many other methods of the DOM API, the  method does not forward exceptions of the native parser to the calling script. It rather stores the error text in a buffer, which the script can read with . The return value signals the type of the exception, which equals one of these constants. The constants are also properties of the constructor, so it is possible to read them in the style  .
     */
    ErrCatNone: number;

    /**
     * <br> This constant is member of constant group: Error Constants<br>
     * In contrast to many other methods of the DOM API, the  method does not forward exceptions of the native parser to the calling script. It rather stores the error text in a buffer, which the script can read with . The return value signals the type of the exception, which equals one of these constants. The constants are also properties of the constructor, so it is possible to read them in the style  .
     */
    ErrCatEnv: number;

    /**
     * <br> This constant is member of constant group: Error Constants<br>
     * In contrast to many other methods of the DOM API, the  method does not forward exceptions of the native parser to the calling script. It rather stores the error text in a buffer, which the script can read with . The return value signals the type of the exception, which equals one of these constants. The constants are also properties of the constructor, so it is possible to read them in the style  .
     */
    ErrCatXML: number;

    /**
     * <br> This constant is member of constant group: Error Constants<br>
     * In contrast to many other methods of the DOM API, the  method does not forward exceptions of the native parser to the calling script. It rather stores the error text in a buffer, which the script can read with . The return value signals the type of the exception, which equals one of these constants. The constants are also properties of the constructor, so it is possible to read them in the style  .
     */
    ErrCatSAX: number;

    /**
     * <br> This constant is member of constant group: Error Constants<br>
     * In contrast to many other methods of the DOM API, the  method does not forward exceptions of the native parser to the calling script. It rather stores the error text in a buffer, which the script can read with . The return value signals the type of the exception, which equals one of these constants. The constants are also properties of the constructor, so it is possible to read them in the style  .
     */
    ErrCatDOM: number;

    /**
     * If an input document contains a doctype declaration which refers an external DTD, the parser by default attempts to load and parse the DTD (and possibly further files referenced from there). Setting this flag to <code>false</code> disables the parsing of external declarations. <br><b>Note:</b> In some cases this flag can prevent a deadlock. See the note at parse().
     */
    loadExternalDTD: boolean;

    /**
     * 
     * @returns
     */
    getDocument(): DOMDocument;

    /**
     * 
     * @returns
     */
    getLastError(): string;

    /**
     * <br><b>Note:</b> On success, call getDocument() to access the DOM tree. On error use getLastError() to obtain an error text.
     * 
     * The encapsulated native DOM library supports the following character encodings: ASCII, UTF-8, UTF-16, UCS4, EBCDIC code pages IBM037, IBM1047 and IBM1140, ISO-8859-1 (aka Latin1) and Windows-1252. (no guarantee)
     * 
     * <br><b>Note:</b> When parsing a doctype declaration with an URL-style systemId such as "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" the parser usually attempts to download the referenced definition file and all depedencies. Some public servers ignore these requests in a way, which makes parse() wait forever. Unfortunately there is no timeout option. There are two ways to solve this problem.
     * <ul>
     * <li>Prepare a file system folder with local copies of the needed DTD files. Pre-process the document externally to replace the standard URLs with local "file://..." URLs. </li>
     * <li>Before calling parse(), disable the downloads with the loadExternalDTD property.</li>
     * </ul>
     * @param xml Either the XML itself or the path and file name of a local file
     * @param fromFile <code>true</code> to parse a local file, otherwise <code>false</code>.
     * @returns An integer, which describes an error category. See ErrCatNone and further constants.
     */
    parse(xml: string, fromFile: boolean): number;

    /**
     * <br><b>Note:</b> Saving to a local file is not supported on all platforms. If a script tries it while the version of the native DOM library is too old, the method just throws a JavaScript error.
     * 
     * <br><b>Note:</b> To obtain an error message use getLastError(). When the message is just "NULL pointer", the native DOM library may have failed to open the output file for writing. When the method writes to a string, the encoding is always the server application's internal encoding.
     * 
     * The encapsulated native DOM library supports the following character encodings: ASCII, UTF-8, UTF-16, UCS4, EBCDIC code pages IBM037, IBM1047 and IBM1140, ISO-8859-1 (aka Latin1) and Windows-1252. (no guarantee)
     * <br><b>Since:</b>Parameter prettyPrint since DOCUMENTS 5.0b HF3
     * @param node The root node to build the document from. Though the interface accepts any DOMNode, only a DOMDocument should be passed. Otherwise the output may be a fragment which is not a valid XML.
     * @param path Optional path and filename to save the XML in the local file system.
     * @param encoding Optional encoding specification for the file. Only used when <em>path</em> is also specified.
     * @param prettyPrint Optional boolean value.
     * @returns The return type depends on the parameters. After saving to a local file, the method returns a boolean value, which indicates the success of the operation. Otherwise the return value is a String with the XML itself, or an empty string after an error.
     */
    write(node: DOMNode, path: string, encoding: string, prettyPrint: boolean): any;

}

declare interface DOMProcessingInstruction {
    /**
     * This is from the first non white space character after the target to the character immediately preceding the "?>".
     */
    data: string;
    /**
     * XML defines this as being the first token following the markup that begins the processing instruction.
     * 
     * This property is readonly.
     */
    target: string;
}

/**
 * Use DOMParser instead.
 * @deprecated XMLParser E4X is deprecated since DOCUMENTS 4.0c and was removed in DOCUMENTS 5.0.
 */
declare interface E4X {
}

/**
 * The Email class allows to create and send an email.<br><br>
 * All the email settings for the principal (such as SMTP server and authentication) are used when sending an email.
 */
declare class Email {
    /**
     * In case of multiple recipients for the parameters <code>to</code>, <code>cc</code> or <code>bcc</code>, the individual email addresses are to be separated by a comma (,). It is not allowed to send an email without any primary recipients specified by the parameter <code>to</code>. To send a HTML email the body must begin with the <HTML> tag. Emails in following cases are stored in the folder <code>Administration > Sent eMails</code> in the DOCUMENTS Manager:
     * <ul>
     * <li>They are to be sent in the future (specified by <code>sendingTime</code>); </li>
     * <li>Sending them failed; </li>
     * <li>The parameter <code>deleteAfterSending</code> is set to <code>false</code>.</li>
     * </ul>
     * <br><b>Since:</b>DOCUMENTS 4.0d
     * @param to String value containing the email addresses of primary recipients.
     * @param from Optional string value containing the sender's email address. If no sender is specified, the default sender for the principal is used.
     * @param subject Optional string value containing the subject of the email.
     * @param body Optional string value containing the content of the email.
     * @param cc Optional string value containing the email addresses of carbon-copy recipients (appearing in the header of the email).
     * @param bcc Optional string value containing the email addresses of blind carbon-copy recipients (remaining invisible to other recipients).
     * @param sendingTime Optional Date object specifying when the email is to be sent. If sending time is not specified, the email will be sent immediately by calling send().
     * @param deleteAfterSending Optional flag indicating whether the email is to be deleted after successful sending. The default value is <code>true</code>.
     */
    constructor(to: string, from: string, subject: string, body: string, cc: string, bcc: string, sendingTime: Date, deleteAfterSending: boolean);

    /**
     * 
     * @param attachment Document object or string value containing the attachment name of the Email.
     * @param sourceFilePath Optional string value containing the path of the file to be attached and stored on the server's filesystem in case the first parameter is a string specifying the attachment name. You may only delete this file after calling the function send(). <br>
     *        Note: This Parameter is ignored in case the first parameter is a Document object.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addAttachment(attachment: any, sourceFilePath: string): boolean;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     */
    getLastError(shortMessage?: boolean): string;

    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    send(): boolean;

    /**
     * 
     * @param bcc String containing the email addresses of blind carbon-copy recipients.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBCC(bcc: string): boolean;

    /**
     * 
     * @param body String containing the content of the email. <br>
     *        Note: To send a HTML email the body must begin with the <HTML> tag.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBody(body: string): boolean;

    /**
     * 
     * @param cc String containing the email addresses of carbon-copy recipients.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setCC(cc: string): boolean;

    /**
     * 
     * @param deleteAfterSending boolean value indicating whether the email is to be deleted after successful sending.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setDeleteAfterSending(deleteAfterSending: boolean): boolean;

    /**
     * 
     * @param from String containing the sender's email address.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFrom(from: string): boolean;

    /**
     * 
     * @param sendingTime Date object representing the sending time.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setSendingTime(sendingTime: Date): boolean;

    /**
     * 
     * @param subject String containing the desired subject of the email.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setSubject(subject: string): boolean;

    /**
     * 
     * @param to String containing the email addresses of primary recipients.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTo(to: string): boolean;

}

/**
 * The File class allows full access to files stored on the Portal Server's filesystem.
 */
declare class File {
    /**
     * Once created, you cannot change the access mode of the file handle. If you need to change the access mode, you would have to close the file and reopen it. <br><b>Note:</b> File handles are so-called expensive ressources, thus it is strongly recommanded to close them as soon as possible. Refer to File.close() for further information.
     * <br><b>Since:</b>ELC 3.50 / otrisPORTAL 5.0
     * @param pathFileName String value containing the complete path and filename of the desired file
     * @param mode String representing the access mode for the file handle. Allowed values are:
     *        <ul>
     *        <li><code>r</code> read mode </li>
     *        <li><code>r+</code> read mode plus write access; if the file does not yet exist, an error is raised </li>
     *        <li><code>w</code> write mode; if the file already exists, it will be completely overwritten </li>
     *        <li><code>w+</code> write mode plus read access; if the file already exists, it will be completely overwritten </li>
     *        <li><code>a</code> write mode with append; if the file does not yet exist, it is created, otherwise the data you write to the file will be appended </li>
     *        <li><code>a+</code> write mode with append plus read access; if the file does not yet exist, it is created, otherwise the data you write to the file will be appended </li>
     *        <li><code>t</code> open the file in text mode (ASCII 127) </li>
     *        <li><code>b</code> open the file in binary mode </li>
     *        </ul>
     * @see [File.close]{@link File#close}
     */
    constructor(pathFileName: string, mode: string);

    /**
     * <br><b>Note:</b> Since file handles are so-called expensive ressources it is strongly recommanded to close each file handle you prior created in your scripts as soon as possible.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [File.File]{@link File#File}
     */
    close(): boolean;

    /**
     * 
     * @returns <code>true</code> if EOF, <code>false</code> if not
     */
    eof(): boolean;

    /**
     * The error message (as long there is one) and its language depend on the operating system used on the Portal Server's machine. If there is no error, the method returns <code>null</code>.
     * @returns String with the content of the last file access error message, <code>null</code> in case of no error
     */
    error(): string;

    /**
     * 
     * @returns <code>true</code> if no error occurred, <code>false</code> in case of any error
     */
    ok(): boolean;

    /**
     * After the method has been performed, the data pointer of the file handle is moved right after the block which has been read. This might as well trigger the EOF flag, if the end of file has been reached.
     * @param charsNo integer value indicating how many characters (resp. byte in binary mode) should be read
     * @returns String containing up to <code>charsNo</code> characters/byte of data of the file.
     */
    read(charsNo: number): string;

    /**
     * This method requires to have the file opened in text mode to work flawlessly, because the end of line is recognized by the linefeed character. After the readLine() method has been performed, the data pointer of the file handle is moved to the beginning of the next line of data.
     * @returns String containing one line of data of the file.
     */
    readLine(): string;

    /**
     * This requires to have the file handle opened with write access (meaning modes <code>r+</code>, <code>w/w+</code>, <code>a/a+</code>) and binary mode <code>b</code>.
     * @param byteArray Array of integers containing any data you want to write to the file
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [File.close]{@link File#close}
     */
    write(byteArray: number[]): boolean;

    /**
     * This requires to have the file handle opened with write access (meaning modes <code>r+</code>, <code>w/w+</code>, <code>a/a+</code>). You may concatenate as many strings as you want. <br><b>Note:</b> If you have opened the file in text mode (t), the line break is always \n, on Linux and Windows as well!
     * @param a String containing any data you want to write to the file
     * @param b String containing any data you want to write to the file
     * @param ...restParams
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    write(a: string, b: string, ...restParams: any[]): boolean;

    /**
     * This requires to have the file handle opened with write access (meaning modes <code>r+</code>, <code>w/w+</code>, <code>a/a+</code>).
     * @param data String containing any data you want to write to the file.
     * @param charsNo integer value indicating how many characters should be written.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeBuffer(data: string, charsNo: number): boolean;

}

/**
 * The FileResultset class supports basic functions to loop through a list of DocFile objects.<br><br>
 * You can manually create a FileResultset as well as access the (selected) files of a (public) Folder.
 */
declare class FileResultset {
    /**
     * Like in other programming languages you create a new object with the <code>new</code> operator (refer to example below). <br><b>Note:</b> Details for the filter expression you find in section FRSFilter
     * 
     * <br><b>Note:</b> Further samples are in FRSSamples
     * @param fileType String containing the technical name of the desired filetype
     * @param filter String containing an optional filter criterium; use empty String ('') if you don't want to filter at all
     * @param sortOrder String containing an optional sort order; use empty String ('') if you don't want to sort at all
     */
    constructor(fileType: string, filter?: string, sortOrder?: string);

    /**
     * 
     * @returns DocFile or <code>null</code> in case of an empty FileResultset
     */
    first(): DocFile;

    /**
     * 
     * @returns Array of String with file ids of the FileResultset
     */
    getIds(): string[];

    /**
     * <br><b>Note:</b> Assuming "myFRS" is a FileResultset the following expression produces the same result.
     * 
     * ```
     * JSON.stringify(myFRS.getIds());
     * ```
     * @returns JSON string with file ids of the FileResultset
     * @see [getIds]{@link getIds}
     */
    getIdsJSON(): string;

    /**
     * 
     * @returns DocFile or <code>null</code> if end of FileResultset is reached.
     */
    last(): DocFile;

    /**
     * 
     * @returns DocFile or <code>null</code> if end of FileResultset is reached.
     */
    next(): DocFile;

    /**
     * 
     * @returns integer value with the amount of DocFile objects in the FileResultset
     */
    size(): number;

    /**
     * 
     * @param idList Array of String with file ids, as returned by FileResultset.getIds()
     * @returns A new FileResultset, which will iterate over the DocFiles with the given ids
     */
    static fromIds(idList: string[]): FileResultset;

    /**
     * <br><b>Note:</b> The following expression produces the same result
     * 
     * ```
     * FileResultset.fromIds(JSON.parse(idList));
     * ```
     * @param idList JSON string with file ids, as returned by FileResultset.getIdsJSON()
     * @returns A new FileResultset, which will iterate over the DocFiles with the given ids
     * @see [fromIds]{@link fromIds}
     */
    static fromIdsJSON(idList: string): FileResultset;

}

declare interface Folder {
    allowArchive: boolean;
    allowCopyTo: boolean;
    allowCreatePDF: boolean;
    allowDelete: boolean;
    allowExport: boolean;
    allowForward: boolean;
    allowMoveTo: boolean;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    comparator1: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    comparator2: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    comparator3: string;
    /**
     * <br><b>Note:</b> This property is only available if the Folder represents a dynamic folder and the filter style 'Extended' is used.
     * @see [FRSFilter]{@link FRSFilter}
     */
    filterExpression: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    filterfieldname1: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    filterfieldname2: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    filterfieldname3: string;
    /**
     * There are two filter styles available:
     * <ul>
     * <li><code>Standard</code></li>
     * <li><code>Extended</code></li>
     * </ul>
     */
    filterStyle: string;
    icon: string;
    id: string;
    /**
     * <br><b>Note:</b> This property is not operative if the folder is not released.
     */
    invisible: boolean;
    /**
     * 
     * @see [Folder.getLocaleLabel]{@link Folder#getLocaleLabel}
     */
    label: string;
    name: string;
    released: boolean;
    /**
     * The following sort columns are available:
     * <ul>
     * <li><code>Title</code></li>
     * <li><code>LastModifiedAt</code></li>
     * <li><code>LastEditor</code></li>
     * <li><code>CreateAt</code></li>
     * <li><code>Owner</code></li>
     * <li><code>CustomField</code></li>
     * </ul>
     */
    sortColumn: string;
    sortDescending: boolean;
    /**
     * <br><b>Note:</b> This field is only available if the Folder.sortColumn is set to 'CustomField'.
     */
    sortFieldName: string;
    /**
     * <br><b>Note:</b> If the folder is a private folder (e.g. inbox) this property returns the owning SystemUser
     */
    systemUser: SystemUser;
    type: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    value1: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    value2: string;
    /**
     * <br><b>Note:</b> This attribute only exists if the Folder represents a dynamic folder
     */
    value3: string;
    /**
     * 
     * @param accessProfileName The technical name of the access profile.
     * @param allowInsertFiles Flag indicating whether inserting files into the folder is allowed.
     * @param allowRemoveFiles Flag indicating whether removing files from the folder is allowed.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addAccessProfile(accessProfileName: string, allowInsertFiles: boolean, allowRemoveFiles: boolean): boolean;
    /**
     * <br><b>Note:</b> This only works in case the Folder is a real public Folder. The Folder must not represent a dynamic folder, since a dynamic folder is sort of a hardcoded search, not a "real" folder.
     * @param docFile DocFile object which shall be available in the given Folder
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFile(docFile: DocFile): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param serverName The technical name of the desired EDA server.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFilterEDAServer(serverName: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param archiveKey The key of the desired EE.i archive.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFilterEEiArchive(archiveKey: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param viewKey The key of the desired EE.x view.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFilterEExView(viewKey: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param fileType The technical name of the desired file type.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFilterFileType(fileType: string): boolean;
    /**
     * 
     * @param loginName The login name of the system user.
     * @param allowInsertFiles Flag indicating whether inserting files into the folder is allowed.
     * @param allowRemoveFiles Flag indicating whether removing files from the folder is allowed.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addSystemUser(loginName: string, allowInsertFiles: boolean, allowRemoveFiles: boolean): boolean;
    /**
     * 
     * @param outbarName The technical name of the outbar.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addToOutbar(outbarName: string): boolean;
    /**
     * The new Folder object is placed at the same hierarchical stage as the Folder used as its source object. After the duplication of the Folder you can change all its public attributes, e.g. to modify the filter definition of a dynamic public folder.
     * @param includeSubFolders boolean whether to duplicate any subfolders contained in the source folder as well
     * @param copyRights boolean whether to assign the same access privileges as those assigned to the source Folder
     * @param copyActions boolean whether to duplicate any userdefined actions attached to the source folder as well
     * @returns Folder object generated by the function call
     */
    copyFolder(includeSubFolders: boolean, copyRights: boolean, copyActions: boolean): Folder;
    /**
     * <br><b>Note:</b> There are three possible types available:
     * <ul>
     * <li><code>public</code></li>
     * <li><code>dynamicpublic</code></li>
     * <li><code>onlysubfolder</code></li>
     * </ul>
     * @param name The technical name of the subfolder to be created.
     * @param type The desired type of the subfolder.
     * @returns New created subfolder as Folder object or <code>null</code> if failed.
     * @see [context.createFolder]{@link context#createFolder}
     */
    createSubFolder(name: string, type: string): Folder;
    /**
     * <br><b>Note:</b> All subfolders are also deleted recursively.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [context.deleteFolder]{@link context#deleteFolder}
     */
    deleteFolder(): boolean;
    /**
     * 
     * @param actionName String value containing the desired action name.
     * @returns UserAction object representing the user-defined action.
     */
    getActionByName(actionName: string): UserAction;
    /**
     * 
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * <br><b>Note:</b> It does not matter whether the Folder is a real public folder or a dynamic folder.
     * @returns FileResultset containing a list of all DocFile objects stored in the Folder
     */
    getFiles(): FileResultset;
    /**
     * 
     * @returns Array of strings containing the technical names of the file types.
     */
    getFilterFileTypes(): any[];
    /**
     * This function executes either an an empty (=unfiltered) search or a fulltext search in the folder. It creates a HitResultset, which summarizes the Folder's files. By defaut the Resultset contains the same columns as the folder's web view. <br><b>Note:</b> The function operates on dynamic and on static folders, but not on the special folders "tasks" and "resubmission". On a failed search request the function does not throw errors. To detect this kind of errors scripts should call HitResultset.getLastErrorCode() or HitResultset.getLastError() on the returned object.
     * 
     * <br><b>Note:</b> When used, the hitlist parameter typically is a string with the pattern "file_type.hit_list". In unambiguous cases a pure hit list name is accepted, too.
     * 
     * The hitlist parameter can instead be an array of strings, where each element declares an individual column (recommended pattern: "file_type.field"). Other valid array elements are reserved attribute column names like "DlcFile_Title".
     * Restriction: If a folder references an EE.i or EE.x native system, only the plain name of a hit list of the folders's primary data source (view or archive) is accepted as the hitlist parameter.
     * 
     * 
     * A few folders are incapable of fulltext searching. An example is a dynamic folder with an API-Style filter expression, which uses the "OR" keyword. For such folders the function returns an empty resultset with an attached error message, if the fulltextFilter parameter is not empty. To detect in advance, if such an operation can succeed, scripts may first create an unfiltered resultset and examine its property searchability.
     * 
     * 
     * Reading from a lean HitResultset with only a few columns can be faster than reading from a FileResultset. Sometimes this effect outweighs the time-related costs of a search. If the folder addresses an archive, the time needed to create temporary DocFiles can be saved with this function.
     * <br><b>Since:</b>DOCUMENTS 5.0f (parameters hitlist, sortOrder, fulltextFilter, pageSize)
     * @param hitlist Optional String or Array with a hit list template specification to override the folder's default. See remarks.
     * @param sortOrder Optional sort expression to override the folder's default sort order.
     * @param fulltextFilter Optional fulltext filter expression. Not applicable to all folders. See remarks.
     * @param pageSize This is a memory-saving and performance-tuning option. If the parameter is zero, Documents will load all available hits at once. If the parameter is a positive value, Documents will initially load only the requested number of hits as a first page. In order to access each further page, a call to fetchNextPage() is necessary. A negative pageSize value will be replaced by the current user's "hits per page" preference setting.
     * @returns A HitResultset, which contains column headers and a list of DocHit objects.
     * @see [getFiles,HitResultset.searchability]{@link getFiles,HitResultset#searchability}
     */
    getHitResultset(hitlist: any, sortOrder: string, fulltextFilter: string, pageSize?: number): HitResultset;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * @param locale Optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically.
     * @returns <code>String</code> containing the ergonomic label of the Folder in the appropriate portal language.
     */
    getLocaleLabel(locale: string): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the Folder object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the Folder object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * 
     * @returns <code>The</code>Folder if successful, <code>NULL</code> is no parent exist
     */
    getParentFolder(): Folder;
    /**
     * 
     * @param subFolder Folder object whose position to be retrieved.
     * @returns The zero-based position of the subfolder as integer or -1 in case of any error.
     * @see [Folder.setPosition]{@link Folder#setPosition} [context.setFolderPosition]{@link context#setFolderPosition}
     */
    getPosition(subFolder: Folder): number;
    /**
     * 
     * @returns FolderIterator with all subfolders one hierarchical level below the given Folder
     */
    getSubFolders(): FolderIterator;
    /**
     * 
     * @returns <code>true</code> if DocFile objects available inside the Folder, <code>false</code> in case the Folder is empty
     */
    hasFiles(): boolean;
    /**
     * 
     * @param accessProfileName The technical name of the access profile.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeAccessProfile(accessProfileName: string): boolean;
    /**
     * <br><b>Note:</b> This only works in case the Folder is a real public Folder. The Folder must not represent a dynamic folder, since a dynamic folder is sort of a hardcoded search, not a "real" folder.
     * @param docFile DocFile object which shall be removed from the given Folder
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    removeFile(docFile: DocFile): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param serverName The technical name of the desired EDA server.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFilterEDAServer(serverName: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param archiveKey The key of the desired EE.i archive.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFilterEEiArchive(archiveKey: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param viewKey The key of the desired EE.x view.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFilterEExView(viewKey: string): boolean;
    /**
     * <br><b>Note:</b> This function is only available for a Folder of type 'dynamicpublic'.
     * @param fileType The technical name of the desired file type.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFilterFileType(fileType: string): boolean;
    /**
     * 
     * @param outbarName The technical name of the outbar.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFromOutbar(outbarName: string): boolean;
    /**
     * 
     * @param loginName The login name of the system user.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeSystemUser(loginName: string): boolean;
    /**
     * 
     * @param scriptName The name of the desired script; use empty string ('') if you want to remove the associated action script.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    setAllowedActionScript(scriptName: string): boolean;
    /**
     * 
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * 
     * @param parentFolder optional Folder object being the parent folder of the current folder. If no parent folder is defined, the current folder will be moved to the top level.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setParentFolder(parentFolder: Folder): boolean;
    /**
     * <br><b>Note:</b> 0 at the beginning and -1 at the end.
     * @param subFolder Folder object to be placed at the given position.
     * @param position The 0-based position for the subfolder.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [Folder.getPosition]{@link Folder#getPosition} [context.setFolderPosition]{@link context#setFolderPosition}
     */
    setPosition(subFolder: Folder, position: number): boolean;
}

declare interface FolderIterator {
    /**
     * 
     * @returns Folder or <code>null</code> in case of an empty FolderIterator
     */
    first(): Folder;
    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * @returns Folder or <code>null</code> if end of FolderIterator is reached.
     */
    next(): Folder;
    /**
     * 
     * @returns integer value with the amount of Folder objects in the FolderIterator
     */
    size(): number;
}

/**
 * The HitResultset class allows comprehensive search operations in Documents and in connected archives.<br><br>
 * While the constructor of this class launches a search operation, the created object stores the results and exposes them as a list of DocHit objects. Compared with the classes <code>FileResultset</code> and <code>ArchiveFileResultset</code> this class has got the following characteristics.
 * <ul>
 * <li>Several filetypes and archives can be searched at one time.</li>
 * <li>Extracting archive hits from a HitResultset does not make DOCUMENTS create a temporary DocFile for each hit. This can save a lot of time.</li>
 * <li>Objects of this class may allocate large amounts of memory, because they sustain a complete hit list instead of a lean id-list. To save memory, scripts should prefer hit lists with as few columns as possible.</li>
 * <li>Search-related errors and warnings do not trigger exceptions. Instead, they are stored inside the object. You can access them with <code>getLastErrorCode()</code> and <code>getLastError()</code> respectively. Advantage: The caller gets the freedom to process the results also after a warning. In this case the hit list maybe incomplete or unsorted.</li>
 * </ul>
 */
declare class HitResultset {
    /**
     * <br><b>Note:</b> On a failed search request the constructor does not throw errors. To detect this kind of errors scripts should test the object's error state with getLastErrorCode() or getLastError().
     * 
     * <b>Resource identifiers: </b>
     * 
     * A "resource identifier" can be one of the following: [ examples in brackets ]
     * <ul>
     * <li>a filetype name [ ftOrder ]</li>
     * <li>a filetype name for use with an EDA store [ ftOrder@peachitStore1 ]</li>
     * <li>a filetype name for use with all EDA stores [ ftOrder@ALLEAS ]</li>
     * <li>a EE.x view key [ Unit=Default/Instance=Default/View=Orders@MyEEX ]</li>
     * <li>a EE.i archive key [ $(#STANDARD)\ORDERS@STDARC_360 ]</li>
     * </ul>
     * 
     * Archive resource identifiers should always get a "@Servername" appendix, though Documents recognizes EE.x and EE.i resources of the primary archive server without that appendix.
     * 
     * <b>Resource ordering and hitlist specification</b>
     * 
     * The resource, which owns a specified hitlist, has to be passed in the first position of the list. Search requests in EE.i/EE.x-archives do not work with a filetype's hitlist. These archives require a hitlist of their own. For this reason, a list of resources of different types must be ordered in the following way: EE.x before EE.i before anything else. Requests, which involve more than one Easy Enterprise server can work only, if a hitlist of the given name exists in each resource of these servers.
     * 
     * <b>Automatic hitlist selection</b>
     * 
     * If the parameter "hitlist" is an empty string, Documents scans the search resources for a named hitlist. If no named hitlist exists, Documents initializes an old-fashioned anonymous hitlist, which is based on the "Display in hit list" option of fields in the Documents Manager and on corresponding options for particular DocFile attributes (title, created, owner, last modified, last editor). An anonymous hitlist does actually not work with EE.x. It partially works with EE.i. In this case, Documents externally uses the setting "CommonDefaultHitlist" of the configuration file "ArchiveXML.ini" and transfers matching columns into the internal hitlist. As long as named hitlists become imported with the archive structure, it does not matter.
     * 
     * Search requests, which involve more than one Easy Enterprise server cannot rely on the automatic selection feature. Scripts should always pass an appropriate hitlist name for these requests.
     * <br><b>Since:</b>DOCUMENTS 4.0b
     * <br><b>Since:</b>DOCUMENTS 4.0d HF1 new parameter fullColumnLength
     * <br><b>Since:</b>DOCUMENTS 5.0 (New option for hitlist parameter: an array of field names instead of a hitlist name)
     * @param searchResources The list of resources to search through. The resource identifiers may be passed either as an array of strings or as an ordinary string with one identifier per line of text. Please read the remarks section about restrictions.
     * @param filter A filter expression. Pass an empty string, if no filter ist required.
     * @param sortOrder A sort expression. Pass an empty string, if no sorting is required.
     * @param hitlist The technical name of a hitlist or an array of field names, which specifies the available columns in the resultset. If the parameter is left empty, Documents tries to choose a hitlist automatically. Details follow in the remarks section. <br><b>Note:</b> If this parameter is an array of field names, a search in EE.i or EE.x is not allowed and the field names must not contain commas (,).
     * @param pageSize This is a memory-saving and performance-tuning option. If the parameter is zero, Documents will load all available hits at once. If the parameter is a positive value, Documents will initially load only the requested number of hits as a first page. In order to access each further page, a call to fetchNextPage() is necessary. A negative pageSize value will be replaced by the current user's "hits per page" preference setting.
     * @param unlimitedHits A boolean that indicates, if the general hit limitations on filetypes and archives must be ignored. A wasteful use of this option may cause issues with the system performance or situations with low free memory.
     * @param fullColumnLength A boolean that indicates, if the general hit column length limitations must be ignored. The default column length is 50 characters (if not a different value is defined by the property Documents-Settings: MaxHitfieldLength). If a field value exceeds this size, the first 50 characters will be displayed followed by '...'. If the parameter fullColumnLength is set to <code>true</code>, no truncation will be done.
     * @param withBlobInfo A boolean that indicates, if the HitResultset should contain blob-information that can be fetched with DocHit.getBlobInfo()
     * @see [UsingfilterexpressionswithFileResultSets,Filterexamples]{@link UsingfilterexpressionswithFileResultSets,Filterexamples}
     */
    constructor(searchResources: any, filter: string, sortOrder: string, hitlist: any, pageSize?: number, unlimitedHits?: boolean, fullColumnLength?: boolean, withBlobInfo?: boolean);

    /**
     * For objects created by <code>Folder.getHitResultset()</code> or <code>Register.getHitResultset()</code> without a fulltextFilter parameter this property provides a hint, if the same operation can succeed with a non-empty fulltext filter. For other HitResultsets it is not meaningful.
     * 
     * Possible values:
     * <ul>
     * <li>0 = The folder/register is not capable of fulltext searching.</li>
     * <li>1 = The folder/register technically supports fulltext searching. User interfaces, however, should hide or disable corresponding input fields due to the actual DOCUMENTS-settings.</li>
     * <li>3 = The folder/register is ready for fulltext searching.</li>
     * </ul><br><b>Note:</b> The value can be interpreted as a bitmask, where Bit 0 indicates technical searchability and Bit 1 indicates UI-driven searchability.
     * @see [Folder.getHitResultset]{@link Folder#getHitResultset}
     */
    readonly searchability: number;

    /**
     * This function explicitly frees the memory used by the object. The Resultset itself becomes empty. All extracted DocHit objects become invalid and must no longer be used. Long-running scripts should use this function instead of waiting for the garbage collector to clean up.
     * @returns The function does not return a value.
     */
    dispose(): any;

    /**
     * <br><b>Note:</b> If the object has been created with a non-zero page size, this value is often smaller than the total amount of hits.
     * @returns integer value with the number of hits, which can actually be read from the resultset.
     * @see [size]{@link size}
     */
    fetchedSize(): number;

    /**
     * If the object has been created with a non-zero page size, each call of this function appends another page of hits to the resultset until all hits are loaded.
     * @returns The value indicates, if any more hits have been loaded.
     */
    fetchNextPage(): boolean;

    /**
     * 
     * @returns DocHit object, <code>null</code> in case of an empty HitResultset
     * @see [next]{@link next}
     */
    first(): DocHit;

    /**
     * <br><b>Note:</b> Valid positions range from 0 to fetchedSize()-1.
     * @param pos Integer position of the hit, beginning with 0
     * @returns DocHit object or <code>null</code> if the position is out of bounds.
     */
    getAt(pos: number): DocHit;

    /**
     * 
     * @returns The number of columns as an Integer.
     */
    getColumnCount(): number;

    /**
     * <br><b>Note:</b> The function tests for a technical column name prior to a localized name.
     * @param colName The name of the column.
     * @returns The zero-based index of the column or a -1, which indicates an unknown column name.
     */
    getColumnIndex(colName: string): number;

    /**
     * <br><b>Note:</b> If the resultset is bases on an EE.i hitlist, the function usually returns field numbers instead of technical names, because column descriptions of an EE.i hitlist only consist of the field number and a label. The label would not be a reliable identifier of the column.
     * 
     * 
     * Columns, which correspond to a DocFile attribute may be given a special constant name instead of the name in an archive's scheme. "TITLE" on EE.x and "110" on EE.i may be presented as "DlcFile_Title", for example.
     * @param local A boolean option to read the localized names instead of the technical names.
     * @returns Array of strings with the column names.
     */
    getColumnNames(local?: boolean): any[];

    /**
     * 
     * @param withServer optional boolean value to indicate, if the archive file keys should include an "@archiveServerName" appendix.
     * @returns Array of String with file ids and archive file keys of the HitResultset.
     * @see [FileResultset.getIds]{@link FileResultset#getIds}
     */
    getHitIds(withServer?: boolean): string[];

    /**
     * 
     * @returns Text of the last error as String
     * @see [getLastErrorCode]{@link getLastErrorCode}
     */
    getLastError(): string;

    /**
     * <br><b>Note:</b> The value 0 means "no error". Positive values indicate warnings or minor errors, while negative values indicate serious errors. After a serious error no hits should be processed. After a minor error, the resultset may be unsorted or truncated, but the contained data is still valid.
     * @returns Integer error code.
     * @see [getLastError]{@link getLastError}
     */
    getLastErrorCode(): number;

    /**
     * <br><b>Note:</b> Calls of getAt() do not affect the internal cursor of next().
     * @returns DocHit object, <code>null</code> if either the end of the resultset or the end of the loaded pages is reached.
     * @see [first]{@link first}
     */
    next(): DocHit;

    /**
     * <br><b>Note:</b> If the object has been created with a non-zero page size, this value is often greater than the amount of already accessible hits.
     * @returns integer value with the total amount of hits. The value -1 may be returned to indicate, that the search continues in the background, and the final number is not yet known.
     * @see [fetchedSize]{@link fetchedSize}
     */
    size(): number;

}

/**
 * There is exactly one global implicit object of the class <code>PropertyCache</code> which is named <code>propCache</code>. At the SystemUser and the AccessProfile are also PropertyCache objects (<code>SystemUser.propCache, AccessProfile.propCache</code>).
 * <ul>
 * <li>You can define named members (properties) at this object to store the data: <code>propCache.Name1 = one_value;</code><code>propCache.Name2 = another_value;</code></li>
 * <li>The stored data can be integer, boolean, string or array values </li>
 * <li>There is no limit (except the memory of the OS) in the amount of properties or in the length of an array </li>
 * <li>Every principal has it's own propCache object </li>
 * </ul><br><b>Note:</b> It is not possible to create objects of the class PropertyCache, since the propCache object is always available.
 */
declare interface PropertyCache {
    /**
     * 
     * @param name
     * @returns <code>true</code> if the property exists, <code>false</code> if not
     */
    hasProperty(name: string): boolean;
    /**
     * 
     * @returns Array with the names of the properties in the PropertyCache.
     */
    listProperties(): string[];
    /**
     * 
     * @param name
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    removeProperty(name: string): boolean;
}

declare interface Register {
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly label: string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly name: string;
    /**
     * The possible values of the type attribute are listed below:
     * <ul>
     * <li><code>documents</code></li>
     * <li><code>fields</code></li>
     * <li><code>links</code></li>
     * <li><code>archiveddocuments</code></li>
     * <li><code>externalcall</code></li>
     * </ul>
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     */
    readonly type: string;
    /**
     * 
     * @param file
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFileLink(file: DocFile): boolean;
    /**
     * With the necessary access rights the user can delete a Document at the Register.
     * @param doc Document to delete
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    deleteDocument(doc: Document): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * @param nameWithExt String containing the document name with extension.
     * @returns Document object if successful, <code>null</code> in case of any error.
     */
    getDocumentByName(nameWithExt: string): Document;
    /**
     * This method is available for documents registers only. You cannot use it with different types of Register objects.
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns DocumentIterator containing the Document objects stored on the Register
     */
    getDocuments(): DocumentIterator;
    /**
     * 
     * @param index index of the desired field.
     * @returns string containing the technical name of the register field, <code>false</code> if index is out of range.
     * @see [DocFile.getFieldName]{@link DocFile#getFieldName}
     */
    getFieldName(index: number): string;
    /**
     * 
     * @returns DocFile object or <code>null</code> if missing
     */
    getFile(): DocFile;
    /**
     * 
     * @returns FileResultset containing a list of all DocFile objects linked to the register.
     */
    getFiles(): FileResultset;
    /**
     * When called on a register of type "link tab" this method executes the same search request as the one, which is usually triggered by a click on the tab in the web client. With a few exceptions an additional fulltext filter can be applied. The results are encapsulated in a HitResultset object.
     * 
     * For all other register types the method simply returns <code>null</code>. <br><b>Note:</b> On a failed search request the function does not throw errors. To detect this kind of errors scripts should call HitResultset.getLastErrorCode() or HitResultset.getLastError() on the returned object.
     * 
     * <br><b>Note:</b> When used, the hitlist parameter typically is a string with the pattern "file_type.hit_list". In unambiguous cases a pure hit list name is accepted, too.
     * 
     * The hitlist parameter can instead be an array of strings, where each element declares an individual column (recommended pattern: "file_type.field"). Other valid array elements are reserved attribute column names like "DlcFile_Title".
     * Restriction: If a folder references an EE.i or EE.x native system, only the plain name of a hit list of the folders's primary data source (view or archive) is accepted as the hitlist parameter.
     * 
     * 
     * A few registers are incapable of fulltext searching. An example is a register with an API-Style filter expression, which uses the "OR" keyword. In this case the function returns an empty resultset with an attached error message, if the fulltextFilter parameter is not empty. To detect in advance, if such an operation can succeed, scripts may first create an unfiltered resultset and examine its property searchability.
     * @param hitlist Optional String or Array with a hit list template specification to override the register's default. See remarks.
     * @param sortOrder Optional sort expression to override the register's default sort order.
     * @param fulltextFilter Optional fulltext filter expression. Not applicable to all registers. See remarks.
     * @param pageSize This is a memory-saving and performance-tuning option. If the parameter is zero, Documents will load all available hits at once. If the parameter is a positive value, Documents will initially load only the requested number of hits as a first page. In order to access each further page, a call to fetchNextPage() is necessary. A negative pageSize value will be replaced by the current user's "hits per page" preference setting.
     * @returns The created HitResultset
     * @see [getFiles,HitResultset.searchability]{@link getFiles,HitResultset#searchability}
     */
    getHitResultset(hitlist: any, sortOrder: string, fulltextFilter: string, pageSize?: number): HitResultset;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the Register object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the Register object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * 
     * @param file
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    removeFileLink(file: DocFile): boolean;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * The filePath parameter must contain not only the directory path but the filename as well. Otherwise the server will take the first file to be found in the given filePath. The registerFileName parameter has the purpose to allow to rename the Document already while uploading it. <br><b>Note:</b> After successful upload of the Document the source file on the server's directory structure is removed!
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @param filePath String containing the filePath and filename of the desired file to be uploaded. Note: Backslashes contained in the filepath must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!
     * @param registerFileName String containing the desired target filename of the Document on the Register
     * @returns <code>Document</code> if successful, <code>null</code> in case of any error
     */
    uploadDocument(filePath: string, registerFileName: string): Document;
}

/**
 * 
 * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
 */
declare interface RegisterIterator {
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns Register or <code>null</code> in case of an empty RegisterIterator
     */
    first(): Register;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns Register or <code>null</code> if end of RegisterIterator is reached.
     */
    next(): Register;
    /**
     * 
     * <br><b>Since:</b>ELC 3.60i / otrisPORTAL 6.0i available for archive files
     * @returns integer value with the amount of Register objects in the RegisterIterator
     */
    size(): number;
}

/**
 * 
 * @see [DocQueryParams]{@link DocQueryParams}
 */
declare interface RetrievalField {
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_STRING: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_TEXT: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_BOOL: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_DATE: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_ENUM: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_NUMERIC: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_REFERENCE: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_HISTORY: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_DOUBLE_LIST: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_CHECKBOX: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_SEPARATOR: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_USER_DEFINED: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_TEXT_FIXED_FONT: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_E_MAIL: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_URL: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_TIMESTAMP: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_FILING_PLAN: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_HTML: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_FILING_STRUCTURE: number;
    /**
     * <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_GADGET: number;
    /**
     * This constant has been added for completeness. Fields in this state should never appear in the retrieval system. <br> This constant is member of constant group: Field Types<br>
     * These constants are equally available in each instance of RetrievalField and in the constructor object.
     */
    readonly FT_UNDEFINED: number;
    /**
     * For a list of valid operators see the page: Using filter expressions with FileResultSets. <br><b>Note:</b> The access to this property is restricted. Only the "OnSearchScript" can effectively modify it. Modifying the operator is risky, since it can produce unexpected results from the user's point of view.
     */
    compOp: string;
    /**
     * <br><b>Note:</b> Actually only the "FillSearchMask" exit can attach default values (see setDefault()). There might exist another method in a future version. To improve upward compatibility a "FillSearchMask" script may check for external default values, and leave them unmodified.
     */
    defaultValue: string;
    /**
     * 
     * @see [setDefault]{@link setDefault}
     */
    defValWriteProt: boolean;
    /**
     * <br><b>Note:</b> If the field has not got a label, DOCUMENTS falls back to the technical name. So there is no need to specify a label always. A few reserved internal fields, which are usualli never displayed on a search mask or a hit list, also come along without any label. An example is the special field "Search_EEIFileNr", which DOCUMENTS uses internally to implement a version listing for an ENTERPRISE.i file.
     */
    label: string;
    name: string;
    /**
     * See the enumeration constants in this class.
     */
    type: number;
    /**
     * <br><b>Note:</b> The access to this property is restricted. Only the "OnSearchScript" can effectively modify it. Modifying the value is risky, because it can produce unexpected results from the user's point of view. Within a "FillSearchMask" exit this property contains always an empty string.
     */
    valueExpr: string;
    /**
     * A "FillSearchMask" script-exit can call this function to place default values in an extended search formular. Calls from other scripts will rather deposit a "LastError" message in the superior DocQueryParams object. <br><b>Note:</b> The DocumentsServer only forwards these parameters to the client application. If a special client implementation will ignore them, the server would not enforce the defaults, because such a behaviour would confuse users.
     * 
     * Calling this function does not modify the "empty" state in terms of DocQueryParams.getSearchField().
     * @param value The initial text in the search field. Dates and numbers must be formatted with the current user's locale settings.
     * @param writeProtect Indicates, if the user interface shall write-protect the field.
     * @returns No return value.
     */
    setDefault(value: string, writeProtect: boolean): any;
}

declare interface RetrievalSource {
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly ST_DLC_FILETYPE: number;
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly ST_EEI_ARCHIVE: number;
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly ST_EEX_VIEW: number;
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly ST_EEX_USERVIEW: number;
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly ST_EAS_FILETYPE: number;
    /**
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly MST_EAS_SERVER: number;
    /**
     * <br><b>Note:</b> A "FillSearchMask" script can usually find a source of this type, when the user has deselected the "actual processes" checkbox. This source has not got any parameters. If there are user accounts in the system, for which the checkbox does not show up, the script code should not interpret this source type at all.
     * 
     * <br> This constant is member of constant group: Searchable Resource<br>
     * These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.
     */
    readonly MST_EAS_ONLY: number;
    /**
     * For conventional file type resources the identifier equals the technical name of the file type. Archive related identifiers consist of a software dependent key or name plus an "@serverName" appendix. <br><b>Note:</b> Modifications of this property won't be forwarded to the retrieval system.
     */
    resId: string;
    /**
     * <br><b>Note:</b> Modifications of this property won't be forwarded to the retrieval system.
     */
    server: string;
    /**
     * <br><b>Note:</b> Modifications of this property won't be forwarded to the retrieval system.
     */
    type: number;
}

/**
 * This class allows asynchronous calling a script from another script.<br><br>
 * You should deliberate whether a script call can be waitable or not. Only waitable script calls can be managed e.g. waiting for a script call to finish or checking whether a call is still running.
 */
declare class ScriptCall {
    /**
     * The following properties of the execution context of the called script are carried over from the execution context of the script where this ScriptCall object is created:
     * <ul>
     * <li>file </li>
     * <li>register </li>
     * <li>document </li>
     * <li>event </li>
     * </ul>
     * You can change these context properties with the available set-methods.
     * <br><b>Since:</b>DOCUMENTS 4.0d
     * @param systemUser The system user who triggers execution of the called script and can be specified as follows:
     *        <ul>
     *        <li>String containing the login name of the system user. </li>
     *        <li>SystemUser object representing the system user. </li>
     *        </ul>
     * @param scriptName String with the name of the called script.
     * @param waitable boolean flag indicating whether this script call is waitable.
     */
    constructor(systemUser: any, scriptName: string, waitable: boolean);

    /**
     * 
     * @param name String value containing the parameter name.
     * @param value String value containing the parameter value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addParameter(name: string, value: string): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a waitable ScriptCall.
     * @returns The return value as an array if the waitable ScriptCall was successfully completed, otherwise the string "Undefined".
     */
    getEnumval(): string[];

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     */
    getLastError(shortMessage?: boolean): string;

    /**
     * <br><b>Note:</b> This function is only available for a waitable ScriptCall.
     * @returns The return value as String if the waitable ScriptCall was successfully completed, otherwise the string "Undefined".
     */
    getReturnValue(): string;

    /**
     * <br><b>Note:</b> This function is only available for a waitable script call.
     * @returns <code>true</code> if the script call is finished, otherwise <code>false</code>
     * @see [ScriptCall.isRunning]{@link ScriptCall#isRunning}
     */
    isFinished(): boolean;

    /**
     * Actually running means, that the script will be executed at this moment (other states are new or queued)
     * 
     * <br><b>Note:</b> This function is only available for a waitable script call.
     * @returns <code>true</code> if the script call is running, otherwise <code>false</code>
     * @see [ScriptCall.isFinished]{@link ScriptCall#isFinished}
     */
    isRunning(): boolean;

    /**
     * In case of successful launch the script will be executed in an own context.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    launch(): boolean;

    /**
     * 
     * @param docFile DocFile object representing the desired execution context file.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.file]{@link context#file}
     */
    setDocFile(docFile: DocFile): boolean;

    /**
     * 
     * @param doc Document object representing the desired execution context document.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.document]{@link context#document}
     */
    setDocument(doc: Document): boolean;

    /**
     * 
     * @param scriptEvent String value containing the desired script event of the execution context.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.event]{@link context#event}
     */
    setEvent(scriptEvent: string): boolean;

    /**
     * 
     * @param folder Folder object representing the desired execution context folder.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.folder]{@link context#folder}
     */
    setFolder(folder: Folder): boolean;

    /**
     * 
     * @param register Register object representing the desired execution context register.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [context.register]{@link context#register}
     */
    setRegister(register: Register): boolean;

    /**
     * The global parameter <code>enumval</code> is then available in the called script
     * @param runAsEnumScript boolean value.
     * @returns
     * @see [ScriptCall.getEnumval]{@link ScriptCall#getEnumval}
     */
    setRunAsEnumScript(runAsEnumScript: boolean): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a waitable script call.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    waitForFinish(): boolean;

}

/**
 * There are several functions implemented in different classes to retrieve a SystemUser object.
 */
declare interface SystemUser {
    /**
     * <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    ANNOTATIONS: number;
    /**
     * The bit that specifies the right to archive files. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    ARCHIVE: number;
    /**
     * The bit that specifies the right to change the filetype of a file. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    CHANGE_TYPE: number;
    /**
     * The bit that specifies the right to change a workflow assigned to a file. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    CHANGE_WORKFLOW: number;
    /**
     * The bit that specifies the right to copy files to a personal or public folder. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    COPY: number;
    /**
     * The bit that specifies the right to create new files. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    CREATE: number;
    /**
     * <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    CREATE_WORKFLOW: number;
    email: string;
    firstName: string;
    lastName: string;
    login: string;
    /**
     * The bit that specifies the right to send files via an e-mail system. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    MAIL: number;
    /**
     * The bit that specifies the right to move files to a personal or public folder. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    MOVE: number;
    /**
     * The bit that specifies the right to create a PDF of a file. <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    PDF: number;
    /**
     * 
     * @see [PropertyCache,AccessProfile.propCache]{@link PropertyCache,AccessProfile#propCache}
     */
    propCache: PropertyCache;
    /**
     * The bit that specifies the right to see files. <br><b>Note:</b> the access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    READ: number;
    /**
     * The bit that specifies the right to delete files. <br><b>Note:</b> the access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    REMOVE: number;
    /**
     * <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    START_WORKFLOW: number;
    /**
     * <br><b>Note:</b> The access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    VERSION: number;
    /**
     * The bit that specifies the right for changing index fields or documents in files. <br><b>Note:</b> the access mask is returned by SystemUser.getAccess(DocFile)
     * @see [SystemUser.getAccess]{@link SystemUser#getAccess}
     */
    WRITE: number;
    /**
     * 
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [SystemUser.setOrAddCustomProperty]{@link SystemUser#setOrAddCustomProperty}
     * @see [SystemUser.getCustomProperties]{@link SystemUser#getCustomProperties}
     */
    addCustomProperty(name: string, type: string, value: string): CustomProperty;
    /**
     * 
     * @param fileTypes The desired file types may be passed as follows:
     *        <ul>
     *        <li>String containing the technical name of the desired file type; </li>
     *        <li>Array of strings containing the technical names of the desired file types; </li>
     *        <li>String constant "*" indicating all file types. </li>
     *        </ul>
     * @param loginNames Array of strings containing the login names of the agents.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFileTypeAgent(fileTypes: string | string[], loginNames: string[]): boolean;
    /**
     * 
     * @param fileTypes The desired file types may be passed as follows:
     *        <ul>
     *        <li>String containing the technical name of the desired file type; </li>
     *        <li>Array of strings containing the technical names of the desired file types; </li>
     *        <li>String constant "*" indicating all file types. </li>
     *        </ul>
     * @param scriptName String containing the name of the script specifying the file type agents.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    addFileTypeAgentScript(fileTypes: string | string[], scriptName: string): boolean;
    /**
     * <br><b>Note:</b> If the user is already logged in, it is necessary to invalidate the cache of the user s. SystemUser.invalidateAccessProfileCache()
     * <br><b>Since:</b>DOCUMENTS 4.0b HF1 for Fellows
     * @param ap AccessProfile the user should be a member of
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addToAccessProfile(ap: AccessProfile): boolean;
    /**
     * 
     * @param passwd String value containing the plain password
     * @returns <code>true</code> if correct, otherwise <code>false</code>
     */
    checkPassword(passwd: string): boolean;
    /**
     * If a Systemuser is set to absent, then all new files are redirected to his agent. The currently existing files (that came into the inbox before the was absent) can be moved to the agent with this method. If the user is not absent this method returns an error.
     * @returns <code>true</code> if succeeded, otherwise <code>false</code> - an error message describing the error with getLastError().
     * @see [setAbsent]{@link setAbsent} [setAbsentMail]{@link setAbsentMail} [SystemUserIteratorgetAgents]{@link SystemUserIteratorgetAgents}
     */
    delegateFilesOfAbsentUser(): boolean;
    /**
     * 
     * @returns Date object representing when the absence begins.
     * @see [setAbsent]{@link setAbsent}
     */
    getAbsentFrom(): Date;
    /**
     * 
     * @returns String with the absence message.
     * @see [setAbsentMail]{@link setAbsentMail} [setAbsent]{@link setAbsent}
     */
    getAbsentMessage(): string;
    /**
     * 
     * @returns Date object representing when the absence ends.
     * @see [setAbsent]{@link setAbsent}
     */
    getAbsentUntil(): Date;
    /**
     * <br><b>Note:</b> There is a constant for any right flag in the access mask (e.g. SystemUser.READ specifies the read right).
     * @param docFile DocFile object to which the access rights should be retrieved.
     * @returns 32-bit value whose bits correspond to the user's access rights.
     * @see [e.g.]{@link e#g#}
     */
    getAccess(docFile: DocFile): number;
    /**
     * 
     * @returns AccessProfileIterator containing a list of all AccessProfiles which are assigned to the user; <code>null</code> in case of any error
     */
    getAccessProfiles(): AccessProfileIterator;
    /**
     * This method returns a SystemUserIterator with the agents of the user, if the user is absent.
     * @returns SystemUserIterator
     * @see [setAbsent]{@link setAbsent} [setAbsentMail]{@link setAbsentMail} [delegateFilesOfAbsentUser]{@link delegateFilesOfAbsentUser}
     */
    getAgents(): SystemUserIterator;
    /**
     * 
     * @returns FolderIterator containing a list of the folders.
     * @see [SystemUser.getAllFolders]{@link SystemUser#getAllFolders}
     */
    getAllFolders(): FolderIterator;
    /**
     * 
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * If the user is not present this method returns an error.
     * @param removeFromAgentInbox Optional boolean indicating whether the files are removed from agent inbox after getting back by the user. If this parameter is not specified, the value from the user settings in the absent dialog on the web is used.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     * @see [setAbsent]{@link setAbsent} [delegateFilesOfAbsentUser]{@link delegateFilesOfAbsentUser}
     */
    getBackDelegatedFiles(removeFromAgentInbox: boolean): boolean;
    /**
     * This method returns a CustomPropertyIterator with the CustomProperty of the user.
     * @param nameFilter String value defining an optional filter depending on the name
     * @param typeFilter String value defining an optional filter depending on the type
     * @returns CustomPropertyIterator
     * @see [context.findCustomProperties]{@link context#findCustomProperties}
     * @see [SystemUser.setOrAddCustomProperty]{@link SystemUser#setOrAddCustomProperty}
     * @see [SystemUser.addCustomProperty]{@link SystemUser#addCustomProperty}
     */
    getCustomProperties(nameFilter?: string, typeFilter?: string): CustomPropertyIterator;
    /**
     * 
     * @returns FolderIterator containing a list of all individual folders.
     * @see [SystemUser.getPrivateFolder]{@link SystemUser#getPrivateFolder}
     */
    getIndividualFolders(): FolderIterator;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the Systemuser object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the Systemuser object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * In addition to the public folders you may define in DOCUMENTS, each DOCUMENTS user has a set of private folders. You might need to access a particular private folder to access its contents, for example.
     * @param folderType String value defining the kind of private folder you want to access.<br>
     *        You may choose between
     *        <ul>
     *        <li><code>"individual"</code> individual folder <br><b>Note:</b> This function returns only the first individual folder on the top level. Using SystemUser.getIndividualFolders() to retrieve all individual folders. </li>
     *        <li><code>"favorites"</code> favorites folder </li>
     *        <li><code>"inbox"</code> the user's inbox </li>
     *        <li><code>"sent"</code> the user's sent folder </li>
     *        <li><code>"sendingfinished"</code> user's folder containing files which finished their workflow </li>
     *        <li><code>"inwork"</code> folder containing the files the SystemUser created himself </li>
     *        <li><code>"resubmission"</code> folder containing files with a resubmission defined for the SystemUser</li>
     *        <li><code>"trash"</code> folder containing files the user has deleted </li>
     *        <li><code>"tasks"</code> folder containing all files the user has a task to perform to </li>
     *        <li><code>"lastused"</code> folder containing the files the SystemUser accessed latest, sorted in descending chronological order </li>
     *        <li><code>"introuble"</code> folder containing files which ran into some workflow error. This folder is only available for editors and only if it has been added manually by the administrator. </li>
     *        </ul>
     * @returns Folder object representing the desired folder, <code>null</code> in case of any error
     * @see [SystemUser.getIndividualFolders]{@link SystemUser#getIndividualFolders}
     */
    getPrivateFolder(folderType: string): Folder;
    /**
     * If the Systemuser is absent and get a file in the inbox, an absence mail to the sender of this file can be send.
     * @returns <code>true</code> if an absence mail will be sent, otherwise <code>false</code>.
     * @see [setAbsentMail]{@link setAbsentMail} [setAbsent]{@link setAbsent}
     */
    getSendAbsenceMail(): boolean;
    /**
     * 
     * @returns String with the value of the status
     * @see [SystemUser.setStatus]{@link SystemUser#setStatus}
     */
    getStatus(): string;
    /**
     * 
     * @returns SystemUser object representing the superior or null if no superior available
     */
    getSuperior(): SystemUser;
    /**
     * 
     * @returns FolderIterator containing a list of all userdefined inbox folders.
     * @see [SystemUser.getPrivateFolder]{@link SystemUser#getPrivateFolder}
     */
    getUserdefinedInboxFolders(): FolderIterator;
    /**
     * 
     * @param profileName String value containing the technical name of an AccessProfile
     * @returns <code>true</code> if the SystemUser is a member of the desired profile, otherwise <code>false</code>
     */
    hasAccessProfile(profileName: string): boolean;
    /**
     * 
     * @returns <code>true</code> if successful, otherwise <code>false</code>
     */
    invalidateAccessProfileCache(): boolean;
    /**
     * 
     * @returns <code>true</code> if the user is absent, otherwise <code>false</code>.
     * @see [setAbsent]{@link setAbsent}
     */
    isAbsent(): boolean;
    /**
     * 
     * @returns <code>true</code> or <code>false</code>
     * @see [SystemUser.setSuperUser]{@link SystemUser#setSuperUser}
     * @deprecated since DOCUMENTS 5.0e HF2 - Use Context.setSuperMode(boolean value) / Context.getSuperMode() instead
     */
    isSuperUser(): boolean;
    /**
     * 
     * @returns The technical names of the file types. If the agent was set for all filetypes by calling <code>SystemUser.addFileTypeAgent</code>, the returned array only contains the string "&#42;".
     */
    listAgentFileTypes(): string[];
    /**
     * 
     * @param fileType String containing the technical name of the file type.
     * @returns Array of strings containing login names of all agents for the desired file type.
     */
    listFileTypeAgents(fileType: string | string[]): string[];
    /**
     * 
     * @param notifying boolean indicating whether files returned from sending are to be notified to the user. The default value is <code>true</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    notifyFileReturnedFromSending(notifying?: boolean): boolean;
    /**
     * 
     * @param notifying boolean indicating whether new files in inbox are to be notified to the user. The default value is <code>true</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    notifyNewFileInInbox(notifying?: boolean): boolean;
    /**
     * 
     * @param fileTypes The desired file types may be passed as follows:
     *        <ul>
     *        <li>String containing the technical name of the desired file type; </li>
     *        <li>Array of strings containing the technical names of the desired file types; </li>
     *        <li>String constant "*" indicating all file types. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    removeFileTypeAgent(fileTypes: string | string[]): boolean;
    /**
     * <br><b>Note:</b> If the user is already logged in, it is necessary to invalidate the cache of the user s. SystemUser.invalidateAccessProfileCache()
     * <br><b>Since:</b>DOCUMENTS 4.0b HF1 for Fellows
     * @param ap
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    removeFromAccessProfile(ap: AccessProfile): boolean;
    /**
     * 
     * @returns true if successful, false in case of any error
     */
    resetSuperior(): boolean;
    /**
     * If a Systemuser is on holiday with this function it is possible to set the user absent. After his return you can set him present. You can also define one or more agents for the absent user. The agent will get new files for the absent user in substitution. With the agent list you set the agents for the user (you overwrite the existing agents!). With an empty agent list you remove all agents.
     * <br><b>Since:</b>DOCUMENTS 4.0d (Option: removeFromAgentInbox)
     * <br><b>Since:</b>DOCUMENTS 5.0a (Option: from and until)
     * @param absent boolean <code>true</code>, if the user should be set absent, <code>false</code>, if the user is present
     * @param filesDueAbsenceToInfo boolean set to <code>true</code>, if the user should get the files due absence to info in his inbox
     * @param agents Array with the login-names of the agents
     * @param removeFromAgentInbox Optional boolean indicating whether the files are removed from agent inbox after getting back by the user. If this parameter is not specified, the value from the user settings in the absent dialog on the web is used.
     * @param from Optional Date object specifying when the absence begins.
     * @param until Optional Date object specifying when the absence ends.
     * @returns <code>true</code> if correct, otherwise <code>false</code> an error message describing the error with getLastError().
     * @see [setAbsentMail]{@link setAbsentMail} [delegateFilesOfAbsentUser]{@link delegateFilesOfAbsentUser} [getBackDelegatedFiles]{@link getBackDelegatedFiles} [SystemUserIteratorgetAgents]{@link SystemUserIteratorgetAgents}
     */
    setAbsent(absent: boolean, filesDueAbsenceToInfo?: boolean, agents?: string[], removeFromAgentInbox?: boolean, from?: Date, until?: Date): boolean;
    /**
     * If a Systemuser is absent and get a file in the inbox, an absence mail to the sender of this file can be send.
     * @param sendMail boolean <code>true</code>, if an absent mail should be sent, otherwise <code>false</code>
     * @param message String with an additional e-mail message from the absent user
     * @returns <code>true</code> if succeeded, otherwise <code>false</code> - an error message describing the error with getLastError().
     * @see [setAbsent]{@link setAbsent} [delegateFilesOfAbsentUser]{@link delegateFilesOfAbsentUser} [SystemUserIteratorgetAgents]{@link SystemUserIteratorgetAgents}
     */
    setAbsentMail(sendMail: boolean, message?: string): boolean;
    /**
     * All existing AccessProfiles will be removed and the AccessProfiles from the parameters will be set.
     * @param apNames1 String or Array with the names of the AccessProfiles
     * @param apNames2 String or Array with the names of the AccessProfiles
     * @param ...restParams
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAccessProfiles(apNames1: any, apNames2: any, ...restParams: any[]): boolean;
    /**
     * 
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * 
     * @param value boolean <code>true</code> to turn authentication on <code>false</code> to turn it off.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setEasywareAuthentication(value: boolean): boolean;
    /**
     * This method creates or modifies a unique CustomProperty for the user. The combination of the name and the type make the CustomProperty unique for the user.
     * @param name String value defining the name
     * @param type String value defining the type
     * @param value String value defining the value
     * @returns CustomProperty
     * @see [SystemUser.getCustomProperties]{@link SystemUser#getCustomProperties}
     * @see [SystemUser.addCustomProperty]{@link SystemUser#addCustomProperty}
     */
    setOrAddCustomProperty(name: string, type: string, value: string): CustomProperty;
    /**
     * 
     * @param newPwd String containing the plaintext new password
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPassword(newPwd: string): boolean;
    /**
     * 
     * @param status String with the desired value of the status. There are following values available:
     *        <ul>
     *        <li><code>inherited</code></li>
     *        <li><code>released</code></li>
     *        <li><code>registered</code></li>
     *        <li><code>blocked</code></li>
     *        <li><code>removable</code></li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [SystemUser.getStatus]{@link SystemUser#getStatus}
     */
    setStatus(status: string): boolean;
    /**
     * 
     * @param sup Systemuser object representing the new superior of the user
     * @returns true if successful, false in case of any error
     */
    setSuperior(sup: SystemUser): boolean;
    /**
     * The method gives "superrights" to the user and overrules the DOCUMENTS right management. e.g. if you use (G)ACL in a filetype, the Superuser will find all files, independed from the content of the ACL field...
     * @param value boolean to set / unset superuser-flag
     * @returns
     * @deprecated since DOCUMENTS 5.0e HF2 - Use Context.setSuperMode(boolean value) instead
     */
    setSuperUser(value: boolean): void;
}

/**
 * The objects of this class represent lists of Systemuser objects and allow to loop through such a list of users.
 */
declare interface SystemUserIterator {
    /**
     * 
     * @returns SystemUser or <code>null</code> in case of an empty SystemUserIterator
     */
    first(): SystemUser;
    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;
    /**
     * 
     * @returns SystemUser or <code>null</code> if end of SystemUserIterator is reached.
     */
    next(): SystemUser;
    /**
     * 
     * @returns integer value with the amount of SystemUser objects in the SystemUserIterator
     */
    size(): number;
}

/**
 * The UserAction class represents the user-defined action of DOCUMENTS.
 */
declare class UserAction {
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 4.0d
     * @param name String value containing the desired user action name.
     * @param label String value containing the desired user action label.
     * @param widget String value containing the desired user action widget.
     * @param type String value containing the desired user action type.
     * @param scope String value containting the desired user action scope.
     * @see [UserAction.widget,UserAction.type,UserAction.scope]{@link UserAction#widget,UserAction#type,UserAction#scope}
     */
    constructor(name: string, label?: string, widget?: string, type?: string, scope?: string);

    label: string;

    name: string;

    scope: string;

    type: string;

    widget: string;

    /**
     * 
     * @param folder Folder object representing the desired Folder.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addToFolder(folder: Folder): boolean;

    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the user action object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the user action object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with the object-id or an empty string in case the user action has not yet been added to a proper parent object.
     */
    getOID(oidLow?: boolean): string;

    /**
     * 
     * @returns The zero-based position of the user action as integer or -1 in case of any error.
     */
    getPosition(): number;

    /**
     * <br><b>Note:</b> If the user action has not yet been added to a proper parent object, this function does nothing.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    remove(): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a user action of type JSP.
     * @param context String containing the desired context.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setContext(context: string): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a user action of type NewFile.
     * @param createDefaultWorkflow Flag indicating whether to create the default workflow for a new file.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setCreateDefaultWorkflow(createDefaultWorkflow: boolean): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a user action of type NewFile.
     * @param fileType The technical name of the desired file type; use empty string ('') if you want to remove the associated file type.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFileTypeForNewFile(fileType: string): boolean;

    /**
     * <br><b>Note:</b> This function is only available for a user action of type PortalScript.
     * @param scriptName The name of the desired portal script; use empty string ('') if you want to remove the associated script.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPortalScript(scriptName: string): boolean;

    /**
     * <br><b>Note:</b> 0 at the beginning and -1 at the end.
     * @param position The 0-based position for the user action.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    setPosition(position: number): boolean;

}

/**
 * These functions allow customizable Date/String conversions and other useful stuff. There is exactly ONE implicit object of the class <code>Util</code> which is named <code>util</code>. <br><b>Note:</b> It is not possible to create objects of the class Util. There are no properties in this class, it supports only the help functions as documented below.
 */
declare namespace util {
    /**
     * <br> This constant is member of constant group: JSON-Mode Constants<br>
     * These constants build an enumeration of the possible values for the asJSON() method.
     */
    var JSON_RAW: number;

    /**
     * <br> This constant is member of constant group: JSON-Mode Constants<br>
     * These constants build an enumeration of the possible values for the asJSON() method.
     */
    var JSON_LABEL: number;

    /**
     * <br> This constant is member of constant group: JSON-Mode Constants<br>
     * These constants build an enumeration of the possible values for the asJSON() method.
     */
    var JSON_LOCALE: number;

    /**
     * This property allows to retrieve the build version number of the PortalServer to customize your PortalScripts in dependence of the used PortalServer.
     */
    var buildNo: number;

    /**
     * The following databases are supported by the PortalServer:
     * <ul>
     * <li><code>oracle</code></li>
     * <li><code>mysql</code></li>
     * <li><code>mssql</code></li>
     * </ul>
     */
    var DB: string;

    /**
     * There are two possible memory models available : x64 or x86.
     */
    var memoryModel: string;

    /**
     * This property allows to retrieve the version number of the PortalServer to customize your PortalScripts in dependence of the used PortalServer. For example:
     * <ul>
     * <li>otrisPORTAL 5.1 / ELC 3.51 returns 5100 </li>
     * <li>otrisPORTAL 6.0 / ELC 3.60 returns 6000 </li>
     * <li>DOCUMENTS 4.0 returns 7000</li>
     * </ul>
     */
    var version: number;

    /**
     * 
     * @param value String to decode
     * @param returnArray boolean as an optional parameter to define if the return value must be a byte-array or string (default)
     * @returns decoded string or byte-array
     */
    function base64Decode(value: string, returnArray?: boolean): any;

    /**
     * <br><b>Note:</b> The URL style uses the characters '-' and '_' in place of '+' and '/', and it does not allow padding characters ('='). base64Decode() does actually not support this style.
     * @param value String or byte-array to encode
     * @param urlStyle optional boolean flag to request Base64URL encoding instead of standard Base64 encoding
     * @returns base64 encoded string
     */
    function base64Encode(value: any, urlStyle?: boolean): string;

    /**
     * For testing purposes a beep sound can be played at the server
     * @param frequency int with the frequency in hertz
     * @param duration int with the length of the sound in milliseconds (ms)
     * @returns
     */
    function beep(frequency: number, duration: number): void;

    /**
     * 
     * @param pdfFilePaths Array containing the file paths of PDFs to be concatenated.
     * @param deleteSinglePdfs Optional boolean value to decide whether to delete the single PDFs on the server's filesystem after concatenating.
     * @returns String with file path of the PDF, an empty string in case of any error.
     */
    function concatPDF(pdfFilePaths: any[], deleteSinglePdfs?: boolean): string;

    /**
     * The different file types require the appropriate PDF filter programs to be installed and configured in DOCUMENTS.
     * @param sourceFilePath String containing the path of the file to be converted.
     * @returns <code>String</code> with file path of the PDF, an empty string in case of any error.
     */
    function convertBlobToPDF(sourceFilePath: string): string;

    /**
     * Excel stores timestamp as a double value. This value exists by two parts. The pre-decimal position is the amount of days since 01.01.1900. The fractional part is the percential time in day.
     * <ul>
     * <li>e.g. 10.01.1900 12:00 => 10.5</li>
     * <li>e.g. 19.10.2018 14:30: => 43392.6042</li>
     * </ul>
     * 
     * A date before 01.03.1900 can not be converted. The method will return -1.0.
     * @param timeStamp Date object representing the desired date
     * @returns double as excel date representation
     */
    function convertDateToExcelDate(timeStamp: Date): number;

    /**
     * The output String may have any format you like. The second parameter defines the format to configure which part of the date String should match the according properties of the Date object.
     * <br><b>Since:</b>DOCUMENTS 5.0a (new: Special formats @date and @timestamp)
     * @param timeStamp Date object representing the desired date
     * @param format String defining the date format of the output String, e.g. "dd.mm.yyyy".<br>
     *        The possible format parts are:
     *        <ul>
     *        <li><code>dd</code> = two digit day </li>
     *        <li><code>mm</code> = two digit month </li>
     *        <li><code>yy</code> = two digit year </li>
     *        <li><code>yyyy</code> = four digit year </li>
     *        <li><code>HH</code> = two digit hour (24 hour format) </li>
     *        <li><code>MM</code> = two digit minute </li>
     *        <li><code>SS</code> = two digit second</li>
     *        </ul>
     *        Special formats:
     *        <ul>
     *        <li><code>@date</code> = @yyyymmdd (locale independant format for filter in a FileResultset, HitResultset) </li>
     *        <li><code>@timestamp</code> = @yyyymmddHHMMSS (locale independant format for filter in a FileResultset, HitResultset) </li>
     *        </ul>
     * @returns String representing the desired date
     * @see [util.convertStringToDate]{@link util#convertStringToDate}
     * @see [context.convertDateToString]{@link context#convertDateToString}
     */
    function convertDateToString(timeStamp: Date, format: string): string;

    /**
     * The String may contain a date or timestamp in any date format you like. The second parameter defines the format to configure which part of the date String should match the according properties of the Date object.
     * <br><b>Since:</b>DOCUMENTS 5.0a (new: Special formats @date and @timestamp)
     * @param dateOrTimeStamp String representing a date, e.g. "19.09.1974"
     * @param format String defining the date format of the input String, e.g. "dd.mm.yyyy".<br>
     *        The possible format parts are:
     *        <ul>
     *        <li><code>dd</code> = two digit day </li>
     *        <li><code>mm</code> = two digit month </li>
     *        <li><code>yy</code> = two digit year </li>
     *        <li><code>yyyy</code> = four digit year </li>
     *        <li><code>HH</code> = two digit hour (24 hour format) </li>
     *        <li><code>MM</code> = two digit minute </li>
     *        <li><code>SS</code> = two digit second</li>
     *        </ul>
     *        Special formats:
     *        <ul>
     *        <li><code>@date</code> = @yyyymmdd (locale independant format for filter in a FileResultset, HitResultset) </li>
     *        <li><code>@timestamp</code> = @yyyymmddHHMMSS (locale independant format for filter in a FileResultset, HitResultset) </li>
     *        </ul>
     * @returns Date object representing the desired date
     * @see [util.convertDateToString]{@link util#convertDateToString}
     */
    function convertStringToDate(dateOrTimeStamp: string, format: string): Date;

    /**
     * 
     * @param pwPlain String containing the plain password
     * @returns String containing the encrypted password
     */
    function cryptPassword(pwPlain: string): string;

    /**
     * 
     * @param encodedParam String containing the encoded URL param
     * @returns <code>String</code> with decoded URL param.
     * @see [util.encodeUrlCompatible]{@link util#encodeUrlCompatible}
     */
    function decodeUrlCompatible(encodedParam: string): string;

    /**
     * 
     * @param input The string that will be decrypted
     * @returns String decrypted value
     * @see [util.encryptString]{@link util#encryptString}
     */
    function decryptString(input: string): string;

    /**
     * This functions provides a simple delete method for files on the server's file system.
     * @param filePath String with the file path
     * @returns empty String if successful, the error message in case of any error
     */
    function deleteFile(filePath: string): string;

    /**
     * 
     * @param uriComponent String with the URI component
     * @returns String with encoded content
     */
    function encodeURIComponent(uriComponent: string): string;

    /**
     * Some parameters in DOCUMENTS urls must be encoded. E.g. the archive keys can contain invalid characters like / etc.
     * @param param String containing the value to encode
     * @returns <code>String</code> with encoded value.
     * @see [util.decodeUrlCompatible]{@link util#decodeUrlCompatible}
     */
    function encodeUrlCompatible(param: string): string;

    /**
     * The length of the input String is limited to 1024 bytes. The encrypted value depends on the principal name. Usage is e.g. storing of passwords in the database for authorization against 3rd party web services.
     * @param input The string that will be encrypted
     * @returns String encrypted value
     * @see [util.decryptString]{@link util#decryptString}
     */
    function encryptString(input: string): string;

    /**
     * 
     * @param filePath String with the path to binary (ppg, png, tif, pdf)
     * @param textFormat String "txt" or "alto"
     * @returns String with OCR content
     */
    function extractText(filePath: string, textFormat: string): string;

    /**
     * This functions provides a simple copy method for files on the server's file system.
     * @param sourceFilePath String with the source file path
     * @param targetFilePath String with the target file path
     * @returns empty String if successful, the error message in case of any error
     * @see [util.fileMove]{@link util#fileMove}
     */
    function fileCopy(sourceFilePath: string, targetFilePath: string): string;

    /**
     * This functions provides a simple move method for files on the server's file system.
     * @param sourceFilePath String with the source file path
     * @param targetFilePath String with the target file path
     * @returns empty String if successful, the error message in case of any error
     * @see [util.fileCopy]{@link util#fileCopy}
     */
    function fileMove(sourceFilePath: string, targetFilePath: string): string;

    /**
     * This functions returns the filesize of a file.
     * @param filePath String with the file path
     * @returns Int with file size if successful, the value -1 in case of any error
     */
    function fileSize(filePath: string): number;

    /**
     * 
     * @param input The string for that the checksum will be generated
     * @returns String with the checksum
     */
    function generateChecksum(input: string): string;

    /**
     * This function retrieve the content (files, subdirectories) of a specified directory of the PortalServer's file system. It expected two empty Arrays, which the function fill with the filenames and subdirectory names. The names will not contain the full path, only the name itself. This function will not work recursively.
     * @param dirname String containing the name of the wanted directory
     * @param files Empty array for the filenames
     * @param subDirs Empty array for the subdirectory names
     * @returns empty String if successful, the error message in case of any error
     */
    function getDir(dirname: string, files: any[], subDirs: any[]): string;

    /**
     * With this function an environment variable in the server's context can be read.
     * @param variableName String with the name of the variable
     * @returns Environment value as String
     */
    function getEnvironment(variableName: string): string;

    /**
     * 
     * @param filePath String with the file path.
     * @returns String containing the file content in base64 format.
     */
    function getFileContentAsString(filePath: string): string;

    /**
     * This function is designed to simplify the composition of filter expressions for a FileResultSet or an ArchiveFileResultSet. If the input string does not contain any double quotation mark ("), the function returns the input enclosed in double quotation marks. Otherwise the function tests if it can use single quotation marks (') instead. If both quotation styles are already used within the input, the function throws an exception.
     * @param input The string to be enclosed
     * @returns String with quotation marks around.
     */
    function getQuoted(input: string): string;

    /**
     * 
     * @returns String with the path to the documentsserver binary
     */
    function getServerPath(): string;

    /**
     * This functions returns the scriptName and line no for debugging or logging purposes
     * @returns String with the scriptName and line no
     */
    function getSourceLineInfo(): string;

    /**
     * 
     * @returns String containing the complete path to the temporary directory
     */
    function getTmpPath(): string;

    /**
     * The length of the id is 40 characters and the id contains only the characters 'a-z','-','0-9'. This unique id can e.g. be used for file names etc.
     * @returns String containing the unique id
     */
    function getUniqueId(): string;

    /**
     * 
     * @returns integer value with the used memory in KBytes
     */
    function getUsedPrivateBytes(): number;

    /**
     * These hash functions are supported:
     * <ul>
     * <li><code>sha1</code></li>
     * <li><code>sha224</code></li>
     * <li><code>sha256</code></li>
     * <li><code>sha384</code></li>
     * <li><code>sha512</code></li>
     * <li><code>md4</code></li>
     * <li><code>md5</code></li>
     * <li><code>whirlpool</code></li>
     * <li><code>ripemd160</code></li>
     * </ul>
     * @param filePath String containing the path of the file to be hashed.
     * @param hashfunction String containing the name of the hash function.
     * @returns String with the hash value of the file, an empty string in case of any error.
     * @see [Document.hash]{@link Document#hash}
     */
    function hash(filePath: string, hashfunction: string): string;

    /**
     * These hash functions are supported:
     * <ul>
     * <li><code>"sha1"</code></li>
     * <li><code>"sha224"</code></li>
     * <li><code>"sha256"</code></li>
     * <li><code>"sha384"</code></li>
     * <li><code>"sha512"</code></li>
     * <li><code>"md4"</code></li>
     * <li><code>"md5"</code></li>
     * </ul>
     * @param hashfunction Name of the hash function.
     * @param key Secret key.
     * @param message Message string to be hashed.
     * @param rawOutput Optional flag: <br>
     *        If set to <code>true</code>, the function outputs the raw binary representation of the hmac. <br>
     *        If set to <code>false</code>, the function outputs the hexadecimal representation of the hmac. <br>
     *        The default value is <code>false</code>.
     * @returns String containing the hash-based message authentication code (hmac) of the message (see rawOutput for representation).
     */
    function hmac(hashfunction: string, key: string, message: string, rawOutput?: Boolean): string;

    /**
     * 
     * @param blobFilePath String containing the path of the file to be checked.
     * @returns <code>boolean</code> value that indicates if the blob is encrypted.
     */
    function isEncryptedBlob(blobFilePath: string): boolean;

    /**
     * 
     * @returns <code>true</code>, if the server runs on windows, <code>false</code> if the server runs on linux
     */
    function isWindowsOS(): Bool;

    /**
     * You can use this function in a x64 / UTF-8 server to count the characters in a UTF-8 string. <br><b>Note:</b> for use in x64 / UTF-8 versions
     * @param value UTF-8 String of which the number of characters will be counted
     * @returns Integer with the length in characters
     */
    function length_u(value: string): number;

    /**
     * Same as util.out() with additional debugging information (script name and line number) You may output whatever information you want. This function is useful especially for debugging purposes. Be aware that you should run the Portalserver as an application if you want to make use of the <code>out()</code> function, otherwise the output is stored in the Windows Eventlog instead.
     * @param output String you want to output to the Portalserver Window
     * @returns
     */
    function log(output: string): any;

    /**
     * This functions provides a simple method for directory creation on the file system.
     * @param dirPath String with the directory path
     * @returns empty String if successful, the error message in case of any error
     */
    function makeFullDir(dirPath: string): string;

    /**
     * This method helps to create valid GACL values when set by PortalScripting.
     * 
     * As separator for the single GACL values a <code>\r\n</code> (<code>%CRLF%</code>) will be used. The values will be trimed (leading and ending whitespaces) and multiple values will be removed.
     * 
     * The method returns a String value in the format <code>\r\n</code> AP1 <code>\r\n</code> AP2 <code>\r\n</code> .... <code>\r\n</code> APx <code>\r\n</code>
     * @param val1 String or Array
     * @param val2 String or Array
     * @param ...restParams
     * @returns String containing the GACL value.
     */
    function makeGACLValue(val1: any, val2: any, ...restParams: any[]): string;

    /**
     * This function masks the following characters for HTML output:
     * <table border=1 cellspacing=0>
     * <tr><td><code>></code></td><td>&gt; </td></tr>
     * <tr><td><code><</code></td><td>&lt; </td></tr>
     * <tr><td><code>\n</code></td><td><br> </td></tr>
     * <tr><td><code>&</code></td><td>&amp; </td></tr>
     * <tr><td><code>"</code></td><td>&quot; </td></tr>
     * </table>
     * 
     * If the String is in UTF-8 Format, all UTF-8 characters will be replaced with the according HTML entities.
     * @param val String to be masked
     * @param isUTF8 boolean flag, if the val is in UTF-8 format
     * @returns HTML-String
     */
    function makeHTML(val: string, isUTF8?: boolean): string;

    /**
     * You may output whatever information you want. This function is useful especially for debugging purposes. Be aware that you should run the Portalserver as an application if you want to make use of the <code>out()</code> function, otherwise the output is stored in the Windows Eventlog instead.
     * @param output String you want to output to the Portalserver Window
     * @returns
     */
    function out(output: string): any;

    /**
     * \u00FA to UTF-8 Strings representation.
     * @param jsonString String with the JSON content to be converted.
     * @returns String with UTF-8 representation
     */
    function prepareJSON(jsonString: string): string;

    /**
     * html, json... )from the file system and returns it content as a string.
     * @param pathToTextFile
     * @returns String with content of the text file; empty string in case of errors
     * @see [util.writeStringToTextFile]{@link util#writeStringToTextFile}
     */
    function readTextFileAsString(pathToTextFile: string): string;

    /**
     * This functions provides a simple search method for Arrays to find the position of a string in an array.
     * @param theArray Array in that the String will be searched
     * @param searchedString String that will be searched
     * @param occurence Integer that define the wanted position at a multi-occurence of the String in the Array
     * @returns Integer with the position of the String in the array, -1 in case of the String isn't found
     */
    function searchInArray(theArray: any[], searchedString: string, occurence?: number): number;

    /**
     * 
     * @param message Message string to be hashed.
     * @returns SHA256 hash of the message.
     */
    function sha256(message: string): string;

    /**
     * <br><b>Note:</b> Signing strings with characters, which are not in the 7-Bit ASCII-Charset, may require a transcoded string. This depends on how the string was created or received. See transcode().
     * 
     * The list of available hash algorithms depends on the linked OpenSSL libraries, not on DOCUMENTS itself.
     * About Arraybuffers
     * 
     * Passing a TypedArray (UInt8Array, Int16Array etc.) instead of an ArrayBuffer is possible, but not recommended. The actual implementation always sends the complete associated buffer. The result can be unexpected, if the TypedArray covers only a section of a bigger buffer. This behaviour might change in future releases.
     * @param algorithm string Short identification of used algorithms, for example "RSASHA256". The first three characters specify an encryption standard. Actually only "RSA" is supported. The other characters select a hash algorithm, for example SHA1, SHA256.
     * @param privateKeyPEM string with a (usually encrypted) private key in PEM format.
     * @param pkPassword string The password to decrypt the private key.
     * @param payload any The text or data to sign. Allowed data types are "String", "Array of Bytes (Integer 0..255)" and "ArrayBuffer".
     * @param urlStyle boolean to request the result Base64URL-encoded
     * @returns string Base64- or Base64URL-encoded String with signature data.
     */
    function sign(algorithm: string, privateKeyPEM: string, pkPassword: string, payload: any, urlStyle?: boolean): string;

    /**
     * 
     * @param duration Integer containing the duration in milliseconds
     * @returns
     */
    function sleep(duration: number): void;

    /**
     * You can use this function in a x64 / UTF-8 server to get a substring of a UTF-8 string. <br><b>Note:</b> for use in x64 / UTF-8 versions
     * @param value UTF-8 String of which the substring is wanted
     * @param startIndex int with the 0-based start index of the substring
     * @param length int with the length in characters of the substring
     * @returns UTF-8 String with the wanted substring
     */
    function substr_u(value: string, startIndex: number, length: number): string;

    /**
     * This method performs an transcoding for a String from a source encoding to a target encoding.
     * 
     * The following encodings are supported:
     * <ul>
     * <li><code>Local</code>: The standard system encoding for Windows systems is <code>Windows-1252</code> and for Linux systems <code>ISO-8859-1</code> or <code>UTF-8</code>. </li>
     * <li><code>UTF-8</code>: Unicode-characterset as ASCII-compatible 8-Bit-coding. </li>
     * <li><code>ISO-8859-1</code>: West-European characterset without Euro-Symbol. </li>
     * <li><code>ISO-8859-15</code>: West-European characterset with Euro-Symbol. </li>
     * <li><code>Windows-1252</code></li>
     * <li><code>Windows-1250</code></li>
     * </ul>
     * @param nameSourceEncoding String containing the name of the source encoding
     * @param text String containing the text to transcode
     * @param nameTargetEncoding String containing the name of the target encoding
     * @returns String containing the transcoded text
     */
    function transcode(nameSourceEncoding: string, text: string, nameTargetEncoding: string): string;

    /**
     * 
     * @param filePath String containing the full path and filename to the desired physical file
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    function unlinkFile(filePath: string): boolean;

    /**
     * 
     * @param pathToTextFile
     * @param content
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [util.readTextFileAsString]{@link util#readTextFileAsString}
     */
    function writeStringToTextFile(pathToTextFile: string, content: string): boolean;

}

/**
 * You may access WorkflowStep objects by the different methods described in the DocFile chapter. <br><b>Note:</b> This class and all of its methods and attributes require a full workflow engine license, it does not work with pure submission lists.
 */
declare interface WorkflowStep {
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly executiveGroup: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly executiveType: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly executiveUser: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly firstControlFlow: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly id: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly name: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly status: string;
    /**
     * <br><b>Note:</b> This property requires a full workflow engine license, it does not work with pure submission lists.
     */
    readonly templateId: string;
    /**
     * This requires the internal ID (as a String value) of the ControlFlow you want the file to pass through. The optional comment parameter will be stored as a comment in the file's monitor. <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * 
     * The current user's permissions are not checked when using this function!
     * @param controlFlowId String value containing the internal ID of the ControlFlow you want to pass through.
     * @param comment optional String value containing your desired comment for the file's monitor.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    forwardFile(controlFlowId: string, comment?: string): boolean;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param attribute String containing the name of the desired attribute
     * @returns String containing the value of the desired attribute
     */
    getAttribute(attribute: string): string;
    /**
     * 
     * @param autoText String containing the rule of the autotext
     * @returns String containing the autotext
     */
    getAutoText(autoText: string): string;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @returns ControlFlowIterator containing the outgoing ControlFlows of the current WorkflowStep object.
     */
    getControlFlows(): ControlFlowIterator;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * <br><b>Since:</b>DOCUMENTS 5.0g (new parameter shortMessage)
     * @param shortMessage optional Boolean; removes "Error in function: class.method(): " from the message.
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(shortMessage?: boolean): string;
    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0 (new parameter oidLow)
     * @param oidLow Optional flag: <br>
     *        If <code>true</code> only the id of the WorkflowStep object (<code>m_oid</code>) will be returned. <br>
     *        If <code>false</code> the id of the WorkflowStep object will be returned together with the id of the corresponding class in the form <code>class-id:m_oid</code>. <br>
     *        The default value is <code>false</code>.
     * @returns <code>String</code> with object-id
     */
    getOID(oidLow?: boolean): string;
    /**
     * <br><b>Note:</b> This function is only available for workflows, but not submission lists.
     * @returns String containing the workflow name
     * @see [WorkflowStep.getWorkflowVersion]{@link WorkflowStep#getWorkflowVersion}
     */
    getWorkflowName(): string;
    /**
     * <br><b>Note:</b> This function is only available for workflows, but not submission lists.
     * @param propertyName String containing the name of the desired property
     * @returns String containing the property value
     */
    getWorkflowProperty(propertyName: string): string;
    /**
     * <br><b>Note:</b> This function is only available for workflows, but not submission lists.
     * @returns String containing the workflow version number
     * @see [WorkflowStep.getWorkflowName]{@link WorkflowStep#getWorkflowName}
     */
    getWorkflowVersion(): string;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param attribute String containing the name of the desired attribute
     * @param value String containing the desired value of the attribute
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setAttribute(attribute: string, value: string): boolean;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param accessProfileName String containing the technical name of the access profile.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    setNewExecutiveGroup(accessProfileName: string): boolean;
    /**
     * <br><b>Note:</b> This function requires a full workflow engine license, it does not work with pure submission lists.
     * @param loginUser String containing the login name of the desired user.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setNewExecutiveUser(loginUser: string): boolean;
}

/**
 * You may access WorkflowStepIterator objects by the getAllLockingWorkflowSteps() method described in the DocFile chapter. <br><b>Note:</b> This class and all of its methods and attributes require a full workflow engine license, it does not work with pure submission lists.
 */
declare interface WorkflowStepIterator {
    /**
     * 
     * @returns WorkflowStep or <code>null</code> in case of an empty WorkflowStepIterator
     */
    first(): WorkflowStep;
    /**
     * 
     * @returns WorkflowStep or <code>null</code> if end of WorkflowStepIterator is reached.
     */
    next(): WorkflowStep;
    /**
     * 
     * @returns integer value with the amount of WorkflowStep objects in the WorkflowStepIterator
     */
    size(): number;
}

/**
 * An XLSXChart object represents an Excel chart. It provides functions for adding data series to the chart and for configuring the chart. An XLSXChart object isn't created directly. Instead it is created by calling the XLSXWriter.addChart(number type) function from an XLSXWriter object.
 * 
 * The basic procedure for adding a chart to a worksheet is:
 * 
 * 
 * <ol>
 * <li>Create the chart with <code>XLSXWriter.addChart()</code>.</li>
 * <li>Add one or more data series to the chart which refers to data in the Excel file using <code>XLSXChart.addSeries()</code>.</li>
 * <li>Configure the chart with the other available functions shown below.</li>
 * <li>Insert the chart into a worksheet using <code>XLSXWorksheet.insertChart()</code>.</li>
 * </ol>
 * @see [XLSXWriter.addChart]{@link XLSXWriter#addChart} [XLSXChart.addSeries]{@link XLSXChart#addSeries} [XLSXWorksheet.insertChart]{@link XLSXWorksheet#insertChart} [XLSXChartsheet.insertChart]{@link XLSXChartsheet#insertChart}
 */
declare interface XLSXChart {
    /**
     * The series numbering and order in the Excel chart will be the same as the order in which they are added with this function.
     * @param categories Optional range of categories in the data series being a string formula like <code>"=Worksheet1!$A$1:$A$6"</code>. The category is more or less the same as the X axis. In most Excel chart types the <code>categories</code> property is optional and the chart will just assume a sequential series from <code>1..n</code>.
     * @param values Optional range of values in the data series being a string formula like <code>"=Worksheet1!$A$1:$A$6"</code>. This parameter links the chart with the worksheet data that it displays.
     * @returns An XLSXChartSeries object if successful, <code>null</code> in case of any error.
     * @see [XLSXChartSeries.setCategories]{@link XLSXChartSeries#setCategories} [XLSXChartSeries.setValues]{@link XLSXChartSeries#setValues}
     */
    addSeries(categories?: string, values?: string): XLSXChartSeries;
    /**
     * 
     * @param axisType The axis type: <code>x</code> or <code>y</code>.
     * @returns An XLSXChartAxis object if successful, <code>null</code> in case of any error.
     */
    getAxis(axisType: string): XLSXChartAxis;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * This function is used to set the style of the chart to one of the 48 built-in styles available on the "Design" tab in Excel 2007. <br><b>Note:</b> In Excel 2013 the Styles section of the "Design" tab in Excel shows what were referred to as "Layouts" in previous versions of Excel. These layouts are not defined in the file format. They are a collection of modifications to the base chart type. They can not be defined by this function.
     * @param styleId Optional index representing the chart style, 1 - 48. The style index number is counted from 1 on the top left in the Excel dialog. The default style is 2.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setStyle(styleId?: number): boolean;
    /**
     * <br><b>Note:</b> The data table can only be shown with Bar, Column, Line and Area charts.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTable(): boolean;
    /**
     * 
     * @param title The chart title displayed above the chart. This parameter can also be a formula such as <code>"=Worksheet1!$A$1"</code> to point to a cell in the Excel file that contains the title. The Excel default is to have no chart title.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChart.setTitleRange]{@link XLSXChart#setTitleRange}
     */
    setTitle(title: string): boolean;
    /**
     * This function can be used to set a chart title range and is an alternative to using XLSXChart.setTitle(String title) and a string formula.
     * @param sheetname The name of the worksheet that contains the cell range.
     * @param row The zero indexed row number of the range.
     * @param col The zero indexed column number of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTitleRange(sheetname: string, row: number, col: number): boolean;
}

/**
 * An XLSXChartAxis object isn't created directly. You can get it using the XLSXChart.getAxis(String axisType) function. It provides functions for configuring a chart axis.
 */
declare interface XLSXChartAxis {
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * Position the category axis labels for the chart. The labels are the numbers, or strings or dates, on the axis that indicate the categories of the axis. <br><b>Note:</b> This function is applicable to <b> category axes </b> only.
     * @param align The axis label alignment with the following available values:
     *        <ul>
     *        <li><code>center</code></li>
     *        <li><code>left</code></li>
     *        <li><code>right</code></li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setLabelAlign(align: string): boolean;
    /**
     * Position the axis labels for the chart. The labels are the numbers, or strings or dates, on the axis that indicate the categories or values of the axis.
     * @param position Option to position the axis labels. The following values are available:
     *        <ul>
     *        <li><code>nextTo</code>: Position the axis labels next to the axis. The default.  </li>
     *        <li><code>high</code>: Position the axis labels at the top of the chart, for horizontal axes, or to the right for vertical axes.  </li>
     *        <li><code>low</code>: Position the axis labels at the bottom of the chart, for horizontal axes, or to the left for vertical axes.  </li>
     *        <li><code>none</code>: Turn off the the axis labels.  </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setLabelPosition(position: string): boolean;
    /**
     * 
     * @param name String containing the name caption of the axis or a formula such as <code>"=Worksheet1!$A$1"</code> to point to a cell in the Excel file that contains the name.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChartAxis.setNameRange]{@link XLSXChartAxis#setNameRange}
     */
    setName(name: string): boolean;
    /**
     * This function can be used to set an axis name range and is an alternative to using <code>XLSXChartAxis.setName(String name)</code> and a string formula.
     * @param sheetname The name of the worksheet that contains the cell range.
     * @param row The zero indexed row number of the range.
     * @param col The zero indexed column number of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setNameRange(sheetname: string, row: number, col: number): boolean;
    /**
     * 
     * @param numFormat The number format string being similar to the parameter <code>numFormat</code> of the function XLSXFormat.setNumberFormat(String numFormat).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setNumberFormat(numFormat: string): boolean;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setReverse(): boolean;
}

/**
 * An XLSXChartSeries object is created using the <code>XLSXChart.addSeries()</code> function. It provides functions for configuring the chart series.
 * @see [XLSXChart.addSeries]{@link XLSXChart#addSeries}
 */
declare interface XLSXChartSeries {
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * The <code>categories</code> and <code>values</code> of a chart data series are generally set using the XLSXChart.addSeries(String categories, String values) function and Excel range formulas like <code>"=Worksheet1!$A$2:$A$7"</code>. This function is an alternative method that is easier to generate programmatically. It requires that you do not set the optional parameters (<code>categories</code> and <code>values</code>) in <code>XLSXChart.addSeries()</code> and then set them using row and column values in this function and <code>XLSXChartSeries.setValues()</code>.
     * @param sheetname The name of the worksheet that contains the data range.
     * @param firstRow The first row of the range. (All zero indexed.)
     * @param firstCol The first column of the range.
     * @param lastRow The last row of the range.
     * @param lastCol The last col of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChartSeries.setValues]{@link XLSXChartSeries#setValues}
     */
    setCategories(sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number): boolean;
    /**
     * The series name in Excel is displayed in the chart legend and in the formula bar. The name property is optional and if it isn't supplied it will default to <code>Series 1..n</code>.
     * @param name String containing the series name or a formula such as <code>"=Worksheet1!$A$1"</code> to point to a cell in the Excel file that contains the name.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChartSeries.setNameRange]{@link XLSXChartSeries#setNameRange}
     */
    setName(name: string): boolean;
    /**
     * This function can be used to set a series name range and is an alternative to using <code>XLSXChartSeries.setName(String name)</code> and a string formula.
     * @param sheetname The name of the worksheet that contains the cell range.
     * @param row The zero indexed row number of the range.
     * @param col The zero indexed column number of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setNameRange(sheetname: string, row: number, col: number): boolean;
    /**
     * This function is an alternative method to configure the series using a syntax that is easier to define programmatically. See the documentation for <code>XLSXChartSeries.setCategories()</code>.
     * @param sheetname The name of the worksheet that contains the data range.
     * @param firstRow The first row of the range. (All zero indexed.)
     * @param firstCol The first column of the range.
     * @param lastRow The last row of the range.
     * @param lastCol The last col of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChartSeries.setCategories]{@link XLSXChartSeries#setCategories}
     */
    setValues(sheetname: string, firstRow: number, firstCol: number, lastRow: number, lastCol: number): boolean;
}

/**
 * An Excel chartsheet is a type of worksheet that only contains a chart. An XLSXChartsheet object isn't created directly. Instead it is created by calling the XLSXWriter.addChartsheet(String name) function from an XLSXWriter object. A chartsheet functions as a worksheet and not as a chart. In order to have it display data a chart must be created and added to the chartsheet. The data for the chartsheet chart must be contained on a separate worksheet. That is why it is always created in conjunction with at least one data worksheet.
 */
declare interface XLSXChartsheet {
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * This function can be used to insert an XLSXChart object into the chartsheet. The XLSXChart object must be created first using the XLSXWriter.addChart(number type) function and configured using the functions from the class XLSXChart. <br><b>Note:</b> A chart may only be inserted into a chartsheet or a worksheet once. If several similar charts are required then each one must be created separately with XLSXWriter.addChart(number type).
     * @param chart An XLSXChart object created via XLSXWriter.addChart(number type).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWorksheet.insertChart]{@link XLSXWorksheet#insertChart}
     */
    insertChart(chart: XLSXChart): boolean;
    /**
     * The XLSXWriter.activateChartsheet(var chartsheet) function determines which chartsheet is initially selected. However, if there are a large number of chartsheets the selected chartsheet may not appear on the screen. To avoid this you can select the leftmost visible chartsheet tab using this function. The default value is the first chartsheet.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFirstSheet(): boolean;
    /**
     * Footers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).
     * @param footer The footer string.
     * @param margin Optional footer margin in inches. Excel default is 0.3.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFooter(footer: string, margin?: number): boolean;
    /**
     * Headers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).
     * @param header The header string.
     * @param margin Optional header margin in inches. Excel default is 0.3.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setHeader(header: string, margin?: number): boolean;
    /**
     * This function is used to set the orientation of the chartsheet's printed page to landscape.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setLandscape(): boolean;
    /**
     * This function is used to set the margins of the chartsheet when it is printed. The units are in inches. Specifying -1 for any parameter will give the default Excel value as shown below.
     * @param left Optional left margin in inches. Excel default is 0.7.
     * @param right Optional right margin in inches. Excel default is 0.7.
     * @param top Optional top margin in inches. Excel default is 0.75.
     * @param bottom Optional bottom margin in inches. Excel default is 0.75.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setMargins(left?: number, right?: number, top?: number, bottom?: number): boolean;
    /**
     * 
     * @param type Optional integer paper format type. If you do not specify a paper type the chartsheet will print using the printer's default paper style. See XLSXWorksheet.setPaperType(number type) for a full list of available paper sizes.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPaperType(type?: number): boolean;
    /**
     * This function is used to set the orientation of the chartsheet's printed page to portrait. The default chartsheet orientation is portrait, so this function isn't generally required.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPortrait(): boolean;
    /**
     * 
     * @param color The desired tab color specified using a HTML style RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTabColor(color: number): boolean;
    /**
     * The default zoom factor is 100. <br><b>Note:</b> This function does not affect the scale of the printed page.
     * @param scale Optional integer chartsheet zoom factor in the range <code>10 <= zoom <= 400</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setZoom(scale?: number): boolean;
}

/**
 * An XLSXFormat object isn't created directly. Instead an XLSXFormat is created by calling the XLSXWriter.addFormat(String name) function from an XLSXWriter object. The properties of a cell that can be formatted include: fonts, colors, patterns, borders, alignment and number formatting.
 */
declare interface XLSXFormat {
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * As in Excel, vertical and horizontal alignments can be combined. Text can be aligned across two or more adjacent cells using the center_across property. However, for genuine merged cells it is better to use the <code>XLSXWorksheet.mergeRange()</code> method.
     * 
     * The vertical justify option can be used to provide automatic text wrapping in a cell. The height of the cell will be adjusted to accommodate the wrapped text.
     * @param alignment The horizontal or vertical alignment direction (see <b>"Text alignments"</b>).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWorksheet.mergeRange]{@link XLSXWorksheet#mergeRange} [XLSXFormat.setTextWrap]{@link XLSXFormat#setTextWrap}
     */
    setAlign(alignment: number): boolean;
    /**
     * 
     * @param color The cell pattern background color being a RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBackgroundColor(color: number): boolean;
    /**
     * 
     * @param pattern Pattern index from <b>"Background patterns"</b>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBackgroundPattern(pattern: number): boolean;
    /**
     * 
     * @param border String specifying which cell border(s) the color to be set for. The following values are available:
     *        <ul>
     *        <li><code>left</code>: the left cell border </li>
     *        <li><code>right</code>: the right cell border </li>
     *        <li><code>top</code>: the top cell border </li>
     *        <li><code>bottom</code>: the bottom cell border </li>
     *        <li><code>all</code>: all cell borders </li>
     *        </ul>
     * @param color The desired cell border color being a RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBorderColor(border: string, color: number): boolean;
    /**
     * 
     * @param border String specifying which cell border(s) the style to be set for. The following values are available:
     *        <ul>
     *        <li><code>left</code>: the left cell border </li>
     *        <li><code>right</code>: the right cell border </li>
     *        <li><code>top</code>: the top cell border </li>
     *        <li><code>bottom</code>: the bottom cell border </li>
     *        <li><code>all</code>: all cell borders </li>
     *        </ul>
     * @param style Border style index from <b>"Cell border styles"</b>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setBorderStyle(border: string, style: number): boolean;
    /**
     * 
     * @param color The cell font color being a RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFontColor(color: number): boolean;
    /**
     * <br><b>Note:</b> Excel can only display fonts that are installed on the system that it is running on. Therefore it is generally best to use the fonts that come as standard with Excel such as Calibri, Times New Roman and Courier New. The default font in Excel 2007, and later, is Calibri.
     * @param name Optional String containing the cell font name. The default value is "Calibri".
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFontName(name: string): boolean;
    /**
     * 
     * @param style Script style. The following styles are available:
     *        <ul>
     *        <li><code>super</code>:superscript style </li>
     *        <li><code>sub</code>: subscript style </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFontScript(style: string): boolean;
    /**
     * <br><b>Note:</b> Excel adjusts the height of a row to accommodate the largest font size in the row. You can also explicitly specify the height of a row using the XLSXWorksheet.setRow() function.
     * @param size The cell font size.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFontSize(size: number): boolean;
    /**
     * 
     * @param style String containing the font style. The following font styles are available:
     *        <ul>
     *        <li><code>bold</code></li>
     *        <li><code>italic</code></li>
     *        <li><code>underline</code></li>
     *        <li><code>strikeout</code></li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFontStyle(style: string): boolean;
    /**
     * 
     * @param color The cell pattern foreground color being a RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setForegroundColor(color: number): boolean;
    /**
     * <br><b>Note:</b> Indentation is a horizontal alignment property. It will override any other horizontal properties but it can be used in conjunction with vertical properties.
     * @param level Integer indentation level.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setIndent(level: number): boolean;
    /**
     * This method is used to define the numerical format of a number in Excel. It controls whether a number is displayed as an integer, a floating point number, a date, a currency value or some other user defined format. For more information about number formats in Excel refer to the [Microsoft documentation for number formats]{@link https://support.office.com/en-us/article/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5}.
     * @param numFormat The numerical format of a cell specified by using a format string.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setNumberFormat(numFormat: string): boolean;
    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setShrink(): boolean;
    /**
     * If you wish to control where the text is wrapped you can add newline characters to the string. Excel will adjust the height of the row to accommodate the wrapped text. A similar effect can be obtained without newlines using the XLSXFormat.setAlign(number alignment) function with XLSXWriter.ALIGN_VERTICAL_JUSTIFY.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTextWrap(): boolean;
}

/**
 * An XLSXWorksheet object isn't created directly. Instead an XLSXWorksheet is created by calling the XLSXWriter.addWorksheet(String name) function from an XLSXWriter object. It handles operations such as writing data to cells or formatting worksheet layout.
 */
declare interface XLSXWorksheet {
    /**
     * An autofilter is a way of adding drop down lists to the headers of a 2D range of worksheet data. This allows users to filter the data based on simple criteria so that some data is shown and some is hidden.
     * 
     * <br><b>Note:</b> It isn't currently possible to apply filter conditions to the autofilter.
     * @param firstRow The first row of the range. (All zero indexed.)
     * @param firstCol The first column of the range.
     * @param lastRow The last row of the range.
     * @param lastCol The last column of the range.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addAutofilter(firstRow: number, firstCol: number, lastRow: number, lastCol: number): boolean;
    /**
     * This function can be used to divide a worksheet into horizontal or vertical regions known as panes and to "freeze" these panes so that the splitter bars are not visible.
     * 
     * The parameters <code>row</code> and <code>col</code> are used to specify the location of the split. It should be noted that the split is specified at the top or left of a cell and that the function uses zero based indexing. Therefore to freeze the first row of a worksheet it is necessary to specify the split at row 2 (which is 1 as the zero-based index).
     * 
     * You can set one of the <code>row</code> and <code>col</code> parameters as zero if you do not want either a vertical or horizontal split.
     * @param row The cell row (zero indexed).
     * @param col The cell column (zero indexed).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    freezePanes(row: number, col: number): boolean;
    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;
    /**
     * <b>Specification of the JSON-String / object-structure</b>
     * 
     * The JSON-String represents a table and has the following structure:
     * 
     * ```
     * {
     * "formats" : [Format-Defintion1, Format-Defintion2, ...],
     * "table" : {
     * "columns" : [Column-Defintion1, Column-Defintion2, Column-Defintion3, ...],
     * "body" : {
     * "rows" : [
     * [val_11, val_12, val_13, ...],
     * [val_21, val_22, val_23, ...],
     * ....
     * ]
     * }
     * }
     * }
     * ```
     * 
     * 
     * 
     * 
     * <ul>
     * <li><code>formats:</code> array of format-definitions, that can be used for the columns-header and body (how shall a cell look like)</li>
     * <li><code>table:</code> contains columns definition and the table-data (body)</li>
     * <li><code>columns:</code> array of columns-definitions with specification of column-label and column style</li>
     * <li><code>rows:</code> array of arrays - each array specify one line in the table</li>
     * </ul>
     * 
     * <b>Format-Definition</b>
     * 
     * ```
     * {
     * "name"       : formatName,
     * "bgcolor"    : colorName,         // optional
     * "pattern"    : patternName,       // optional
     * "fontcolor"  : colorName,         // optional
     * "fontstyle"  : styleName,         // optional
     * "fontsize"   : int-value,         // optional
     * "cellborder" : int-value,         // optional
     * "align"      : alignStyle,        // optional
     * "textwrap"   : 1,                 // optional
     * "numformat"  : "format-string"    // optional
     * // colorName = 0xaabbcc , "black", "blue", "brown", "cyan", "gray", "green", "lime", "magenta", "navy", "orange", "pink", "purple", "red", "silver", "white", "yellow"
     * // patternName = "solid", "mediumgrey", "lightgrey"
     * // styleName = "bold", "italic"
     * // alignStyle = "left", "center", "right"
     * }
     * ```
     * 
     * 
     * 
     * <b>Column-Definition</b>
     * 
     * ```
     * {
     * "label"      : "Column-Label",                                            // optional
     * "header"     : "Name of Format-Definition for the column in the 1. row",  // optional
     * "body"       : "Name of Format-Definition for the column in the 2+. row", // optional
     * "width"      : int-value,                                                 // optional
     * "type"       : "string"     forces to convert values to string            // optional
     * }
     * ```
     * @param jsonString Containing the data to be imported.
     * @param row Optional the zero indexed row number of the first cell of the area the data to be written to.
     * @param col Optional the zero indexed column number of the first cell of the area the data to be written to.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWorksheet.importFromJSONFile]{@link XLSXWorksheet#importFromJSONFile}
     */
    importFromJSON(jsonString: string, row?: number, col?: number): boolean;
    /**
     * 
     * @param jsonFilePath The JSON-file path.
     * @param row Optional the zero indexed row number of the first cell of the area the data to be written to.
     * @param col Optional the zero indexed column number of the first cell of the area the data to be written to.
     * @returns
     * @see [XLSXWorksheet.importFromJSON]{@link XLSXWorksheet#importFromJSON}
     */
    importFromJSONFile(jsonFilePath: string, row?: number, col?: number): boolean;
    /**
     * This function can be used to insert an XLSXChart object into a worksheet. It takes additional optional parameters to position and scale the image of the chart. The XLSXChart object must be created first using the XLSXWriter.addChart(number type) function and configured using the functions from the class XLSXChart. <br><b>Note:</b> A chart may only be inserted once into a chartsheet or a worksheet. If several similar charts are required then each one must be created separately with XLSXWriter.addChart(number type).
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param chart An XLSXChart object created via XLSXWriter.addChart(number type).
     * @param xOffset Optional integer offset from the left of the cell in pixels.
     * @param yOffset Optional integer offset from the top of the cell in pixels.
     * @param xScale Optional X scale of the image as a decimal.
     * @param yScale Optional Y scale of the image as a decimal.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXChartsheet.insertChart]{@link XLSXChartsheet#insertChart}
     */
    insertChart(row: number, col: number, chart: XLSXChart, xOffset?: number, yOffset?: number, xScale?: number, yScale?: number): boolean;
    /**
     * This function can be used to insert an image (in PNG or JPEG format) into a worksheet. It takes additional optional parameters to position and scale the image. <br><b>Note:</b> The scaling of an image may be affected if it crosses a row that has its default height changed due to a font that is larger than the default font size or that has text wrapping turned on. To avoid this you should explicitly set the height of the row using XLSXWorksheet.setRow() if it crosses an inserted image.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param filename The image filename, with path if required.
     * @param xOffset Optional integer offset from the left of the cell in pixels.
     * @param yOffset Optional integer offset from the top of the cell in pixels.
     * @param xScale Optional X scale of the image as a decimal.
     * @param yScale Optional Y scale of the image as a decimal.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    insertImage(row: number, col: number, filename: string, xOffset?: number, yOffset?: number, xScale?: number, yScale?: number): boolean;
    /**
     * This function allows cells to be merged together so that they act as a single area. Excel generally merges and centers cells at same time. To get similar behavior you need to apply a format object with the appropriate alignment:
     * 
     * 
     * 
     * ```
     * var mergeFormat = writer.addFormat("mergeFormat");
     * mergeFormat.setAlign(writer.ALIGN_CENTER);
     * worksheet1.mergeRange(1, 1, 1, 3, "Merged Range", mergeFormat);
     * ```
     * 
     * 
     * 
     * <br><b>Note:</b> This function writes a string value to the merged range. In order to write other data types, such as a number or a formula, you can overwrite the first cell with a call to the function XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with the appropriate value type. The same format should be used as was used in the merged range.
     * 
     * 
     * 
     * ```
     * // First write a range with a blank string.
     * worksheet1.mergeRange(1, 1, 1, 3, "", format);
     * // Then overwrite the first cell with a number.
     * worksheet1.writeCell("number", 1, 1, 123, format);
     * ```
     * @param firstRow The first row of the range. (All zero indexed.)
     * @param firstCol The first column of the range.
     * @param lastRow The last row of the range.
     * @param lastCol The last col of the range.
     * @param value String value to write to the merged range.
     * @param format Optional XLSXFormat object used to apply formatting to the merged cells. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    mergeRange(firstRow: number, firstCol: number, lastRow: number, lastCol: number, value: string, format?: XLSXFormat): boolean;
    /**
     * This function can be used to change the default properties of a single column or a range of columns.
     * 
     * If it is applied to a single column the value of <code>firstCol</code> and <code>lastCol</code> should be the same. It can also be used to create Outlines and Grouping of columns with the optional parameters <code>hidden</code>, <code>level</code> and <code>collapsed</code>. Adjacent columns with the same outline level are grouped together into a single outline. Columns can be collapsed by setting the parameter <code>hidden</code>
     * 
     * for the hidden columns and setting the parameter <code>collapsed</code> for a column that has the collapsed '+' symbol.
     * @param firstCol The zero indexed first column.
     * @param lastCol The zero indexed last column.
     * @param width Optional width of the column(s). The default column width is <code>8.43</code>. The <code>width</code> parameter sets the column width in the same units used by Excel which is: the number of characters in the default font. The default width is <code>8.43</code> in the default font of Calibri 11. The actual relationship between a string width and a column width in Excel is complex. See the [following explanation of column widths]{@link https://support.microsoft.com/en-us/kb/214123} from the Microsoft support documentation for more details. <br><b>Note:</b> There is no way to specify "AutoFit" for a column in the Excel file format. This feature is only available at runtime from within Excel. It is possible to simulate "AutoFit" in your application by tracking the maximum width of the data in the column as your write it and then adjusting the column width at the end.
     * @param format Optional XLSXFormat object used to apply formatting to any cells in the column that don't have a format. As in Excel a row format takes precedence over a default column format.
     * @param hidden Optional flag used to hide the column(s).
     * @param level Optional integer outline level of the column(s) used to create Outlines and Grouping. Excel allows up to 7 outline levels. Therefore the level parameter should be in the range <code>0 <= level <= 7</code>.
     * @param collapsed Optional flag used to create Outlines and Grouping and indicating whether to collapse a column that has the collapsed '+' symbol.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [setRow]{@link setRow}
     */
    setColumn(firstCol: number, lastCol: number, width?: number, format?: XLSXFormat, hidden?: boolean, level?: number, collapsed?: boolean): boolean;
    /**
     * The XLSXWriter.activateWorksheet(var worksheet) function determines which worksheet is initially selected. However, if there are a large number of worksheets the selected worksheet may not appear on the screen. To avoid this you can select the leftmost visible worksheet tab using this function. The default value is the first worksheet.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFirstSheet(): boolean;
    /**
     * Footers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).
     * @param footer The footer string.
     * @param margin Optional footer margin in inches. Excel default is 0.3.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setFooter(footer: string, margin?: number): boolean;
    /**
     * There are two options
     * <ul>
     * <li><code>hideAll</code>: Hide gridlines on the screen and the printed page. </li>
     * <li><code>showPrint</code>: Display gridlines on the screen and the printed page. </li>
     * </ul>
     * 
     * <br><b>Note:</b> The Excel default is that the screen gridlines are on and the printed worksheet is off.
     * @param option string Gridline option. Possible values are <code>hideAll</code> and <code>showPrint</code>. See description for details.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setGridlines(option: string): boolean;
    /**
     * Headers are generated using a string which is a combination of plain text and control characters (see Generating header/footer for more details).
     * @param header The header string.
     * @param margin Optional header margin in inches. Excel default is 0.3.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setHeader(header: string, margin?: number): boolean;
    /**
     * This function adds horizontal page breaks to the worksheet. A page break causes all the data that follows it to be printed on the next page. Horizontal page breaks act between rows.
     * 
     * <br><b>Note:</b> There is an Excel limitation of 1023 horizontal page breaks per worksheet.
     * @param breaks Integer array of page breaks.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setHorizontalPagebreaks(breaks: number[]): boolean;
    /**
     * This function is used to set the orientation of the worksheet's printed page to landscape.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setLandscape(): boolean;
    /**
     * This function is used to set the margins of the worksheet when it is printed. The units are in inches. Specifying -1 for any parameter will give the default Excel value as shown below.
     * @param left Optional left margin in inches. Excel default is 0.7.
     * @param right Optional right margin in inches. Excel default is 0.7.
     * @param top Optional top margin in inches. Excel default is 0.75.
     * @param bottom Optional bottom margin in inches. Excel default is 0.75.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setMargins(left?: number, right?: number, top?: number, bottom?: number): boolean;
    /**
     * This function is used to display the worksheet in "Page View/Layout" mode.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPageView(): boolean;
    /**
     * The following paper styles are available:
     * 
     * 
     * <table border=1 cellspacing=0>
     * <tr><td>Index  </td><td>Paper format  </td><td>Paper size   </td></tr>
     * <tr><td>0  </td><td>Printer default  </td><td>Printer default   </td></tr>
     * <tr><td>1  </td><td>Letter  </td><td>8 1/2 x 11 in   </td></tr>
     * <tr><td>2  </td><td>Letter Small  </td><td>8 1/2 x 11 in   </td></tr>
     * <tr><td>3  </td><td>Tabloid  </td><td>11 x 17 in   </td></tr>
     * <tr><td>4  </td><td>Ledger  </td><td>17 x 11 in   </td></tr>
     * <tr><td>5  </td><td>Legal  </td><td>8 1/2 x 14 in   </td></tr>
     * <tr><td>6  </td><td>Statement  </td><td>5 1/2 x 8 1/2 in   </td></tr>
     * <tr><td>7  </td><td>Executive  </td><td>7 1/4 x 10 1/2 in   </td></tr>
     * <tr><td>8  </td><td>A3  </td><td>297 x 420 mm   </td></tr>
     * <tr><td>9  </td><td>A4  </td><td>210 x 297 mm   </td></tr>
     * <tr><td>10  </td><td>A4 Small  </td><td>210 x 297 mm   </td></tr>
     * <tr><td>11  </td><td>A5  </td><td>148 x 210 mm   </td></tr>
     * <tr><td>12  </td><td>B4  </td><td>250 x 354 mm   </td></tr>
     * <tr><td>13  </td><td>B5  </td><td>182 x 257 mm   </td></tr>
     * <tr><td>14  </td><td>Folio  </td><td>8 1/2 x 13 in   </td></tr>
     * <tr><td>15  </td><td>Quarto  </td><td>215 x 275 mm   </td></tr>
     * <tr><td>16  </td><td>undefined</td><td>10x14 in   </td></tr>
     * <tr><td>17  </td><td>undefined</td><td>11x17 in   </td></tr>
     * <tr><td>18  </td><td>Note  </td><td>8 1/2 x 11 in   </td></tr>
     * <tr><td>19  </td><td>Envelope 9  </td><td>3 7/8 x 8 7/8   </td></tr>
     * <tr><td>20  </td><td>Envelope 10  </td><td>4 1/8 x 9 1/2   </td></tr>
     * <tr><td>21  </td><td>Envelope 11  </td><td>4 1/2 x 10 3/8   </td></tr>
     * <tr><td>22  </td><td>Envelope 12  </td><td>4 3/4 x 11   </td></tr>
     * <tr><td>23  </td><td>Envelope 14  </td><td>5 x 11 1/2   </td></tr>
     * <tr><td>24  </td><td>C size sheet  </td><td>undefined</td></tr>
     * <tr><td>25  </td><td>D size sheet  </td><td>undefined</td></tr>
     * <tr><td>26  </td><td>E size sheet  </td><td>undefined</td></tr>
     * <tr><td>27  </td><td>Envelope DL  </td><td>110 x 220 mm   </td></tr>
     * <tr><td>28  </td><td>Envelope C3  </td><td>324 x 458 mm   </td></tr>
     * <tr><td>29  </td><td>Envelope C4  </td><td>229 x 324 mm   </td></tr>
     * <tr><td>30  </td><td>Envelope C5  </td><td>162 x 229 mm   </td></tr>
     * <tr><td>31  </td><td>Envelope C6  </td><td>114 x 162 mm   </td></tr>
     * <tr><td>32  </td><td>Envelope C65  </td><td>114 x 229 mm   </td></tr>
     * <tr><td>33  </td><td>Envelope B4  </td><td>250 x 353 mm   </td></tr>
     * <tr><td>34  </td><td>Envelope B5  </td><td>176 x 250 mm   </td></tr>
     * <tr><td>35  </td><td>Envelope B6  </td><td>176 x 125 mm   </td></tr>
     * <tr><td>36  </td><td>Envelope  </td><td>110 x 230 mm   </td></tr>
     * <tr><td>37  </td><td>Monarch  </td><td>3.875 x 7.5 in   </td></tr>
     * <tr><td>38  </td><td>Envelope  </td><td>3 5/8 x 6 1/2 in   </td></tr>
     * <tr><td>39  </td><td>Fanfold  </td><td>14 7/8 x 11 in   </td></tr>
     * <tr><td>40  </td><td>German Std Fanfold  </td><td>8 1/2 x 12 in   </td></tr>
     * <tr><td>41  </td><td>German Legal Fanfold  </td><td>8 1/2 x 13 in   </td></tr>
     * </table>
     * 
     * 
     * <b>Note:</b> It is likely that not all of these paper types will be available to the end user since it will depend on the paper formats that the user's printer supports. Therefore, it is best to stick to standard paper types. If you do not specify a paper type the worksheet will print using the printer's default paper style.
     * @param type Optional integer paper format type (see table of paper styles).
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPaperType(type?: number): boolean;
    /**
     * This function is used to set the orientation of the worksheet's printed page to portrait. The default worksheet orientation is portrait, so this function isn't generally required.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setPortrait(): boolean;
    /**
     * The function is used to change the default properties of a row. The most common use for this function is to change the height of a row. It can also be used to create Outlines and Grouping of rows with the optional parameters <code>hidden</code>, <code>level</code> and <code>collapsed</code>. Adjacent rows with the same outline level are grouped together into a single outline. Rows can be collapsed by setting the parameter <code>hidden</code>
     * 
     * for the hidden rows and setting the parameter <code>collapsed</code> for a row that has the collapsed '+' symbol.
     * @param row The zero indexed row number.
     * @param height Optional row height. The default row height is 15.
     * @param format Optional XLSXFormat object used to apply formatting to any cells in the row that don't have a format. As with Excel the row format is overridden by an explicit cell format.
     * @param hidden Optional flag used to hide the row.
     * @param level Optional integer outline level of the row used to create Outlines and Grouping. Excel allows up to 7 outline levels. Therefore the level parameter should be in the range <code>0 <= level <= 7</code>.
     * @param collapsed Optional flag used to create Outlines and Grouping and indicating whether to collapse a row that has the collapsed '+' symbol.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [setColumn]{@link setColumn}
     */
    setRow(row: number, height?: number, format?: XLSXFormat, hidden?: boolean, level?: number, collapsed?: boolean): boolean;
    /**
     * 
     * @param color The desired tab color specified using a HTML style RGB integer value.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setTabColor(color: number): boolean;
    /**
     * This function adds vertical page breaks to the worksheet. A page break causes all the data that follows it to be printed on the next page. Vertical page breaks act between columns. <br><b>Note:</b> There is an Excel limitation of 1023 vertical page breaks per worksheet.
     * @param breaks Integer array of page breaks.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setVerticalPagebreaks(breaks: number[]): boolean;
    /**
     * The default zoom factor is 100. <br><b>Note:</b> This function does not affect the scale of the printed page.
     * @param scale Optional integer worksheet zoom factor in the range <code>10 <= zoom <= 400</code>.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setZoom(scale?: number): boolean;
    /**
     * This function can be used to divide a worksheet into horizontal or vertical regions known as panes. This function is different from the function XLSXWorksheet.freezePanes(number row, number col) in that the splits between the panes will be visible to the user and each pane will have its own scroll bars.
     * 
     * The parameters <code>vertical</code> and <code>horizontal</code> are used to specify the vertical and horizontal position of the split. The units for <code>vertical</code> and <code>horizontal</code> are the same as those used by Excel to specify row height and column width. However, the vertical and horizontal units are different from each other. Therefore you must specify the <code>vertical</code> and <code>horizontal</code> parameters in terms of the row heights and column widths that you have set or the default values which are 15 for a row and 8.43 for a column.
     * @param vertical The position for the vertical split.
     * @param horizontal The position for the horizontal split.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    splitPanes(vertical: number, horizontal: number): boolean;
    /**
     * This function is used to add formatting to a cell which doesn't contain a string or number value.
     * 
     * Excel differentiates between an "Empty" cell and a "Blank" cell. An Empty cell is a cell which doesn't contain data or formatting whilst a Blank cell doesn't contain data but does contain formatting. Excel stores Blank cells but ignores Empty cells.
     * 
     * As such, if you write an empty cell without formatting it is ignored.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeBlank(row: number, col: number, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "boolean"</code>.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value The boolean value to write to the cell.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeBoolean(row: number, col: number, value: boolean, format?: XLSXFormat): boolean;
    /**
     * This function writes a value according to the type (see below) to a worksheet cell specified by <code>row</code> and <code>column</code>.
     * 
     * <b>Available value types: </b>
     * <ul>
     * <li><code><b>string</b></code><br>
     * A value of this type is a string. Unicode strings are supported in UTF-8 encoding. This generally requires that your source file is UTF-8 encoded or that the data has been read from a UTF-8 source. </li>
     * <li><code><b>number</b></code><br>
     * A value of this type is a number. The native data type for all numbers in Excel is an IEEE-754 64-bit double-precision floating point, which is also the default type used by this function. According to the used number format, a number can be displayed as an integer, a floating point number, a date, a currency value or some other user defined format. See XLSXFormat.setNumberFormat(String numFormat) for more details. <br><b>Note:</b> Excel doesn't support <code>NaN</code>, <code>Inf</code> or <code>-Inf</code> as a number value. If you are writing data that contains these values then your application should convert them to a string or handle them in some other way. </li>
     * <li><code><b>boolean</b></code><br>
     * A value of this type is a boolean value. </li>
     * <li><code><b>formula</b></code><br>
     * A value of this type is a string containing a formula. Formulas must be written with the US style separator/range operator which is a comma (not semi-colon). Therefore a formula with multiple values should be written e.g. as follows: <code>"=SUM(1, 2, 3)"</code>.  </li>
     * <li><code><b>link</b></code><br>
     * A value of this type is a string containing a URL/hyperlink. The usual web style URI's are supported: <code>http://</code>, <code>https://</code>, <code>ftp://</code> and <code>mailto:</code>. An Excel hyperlink is comprised of two elements: the displayed string and the non-displayed link. By default the displayed string is the same as the link. However, it is possible to overwrite it with any other value type. The most common case is to overwrite the displayed link text with another string:
     * 
     * ```
     * // The typical worksheet format for a hyperlink is a blue underline:
     * var urlFormat = writer.addFormat("urlFormat");
     * urlFormat.setFontStyle("underline");
     * urlFormat.setFontColor(writer.COLOR_BLUE);
     * // Write a hyperlink but overwrite the displayed string.
     * worksheet1.writeCell("link", 2, 0, "http://libxlsxwriter.github.io", urlFormat);
     * worksheet1.writeCell("string", 2, 0, "Read the documentation.", urlFormat);
     * ```
     * 
     * Two local URIs are supported: <code>internal:</code> and <code>external:</code>. These are used for hyperlinks to internal worksheet references or external Excel file and worksheet references.Worksheet references are typically of the form <code>Worksheet1!A1</code>. You can also link to a worksheet range using the standard Excel notation: <code>Worksheet1!A1:B2</code>.In external links the Excel file and worksheet name must be separated by the <code>#</code> character:
     * 
     * ```
     * worksheet1.writeCell("link", 0, 0, "external:c:\\foo.xlsx#Worksheet2!A1", urlFormat);
     * ```
     * 
     * Excel requires that worksheet names containing spaces or non alphanumeric characters are single quoted as follows:
     * 
     * ```
     * worksheet1.writeCell("link", 0, 0, "internal:'Sales Data'!A1", urlFormat);
     * ```
     * 
     * Links to network files are also supported. Network files normally begin with two back slashes as follows <code>\\NETWORK\etc</code>.
     * 
     * ```
     * worksheet1.writeCell("link", 0, 0, "external:c:/temp/foo.xlsx",     urlFormat);
     * worksheet1.writeCell("link", 1, 0, "external://NET/share/foo.xlsx", urlFormat);
     * ```
     * 
     * <b>Note:</b> This function will escape the following characters in URLs as required by Excel: <code>\s " < > \ [ ] ^ { }</code> unless the URL already contains <code>%xx</code> style escapes. In which case it is assumed that the URL was escaped correctly by the user and will by passed directly to Excel.  </li>
     * <li><code><b>datetime</b></code><br>
     * A value of this type is a Date object. Dates and times in Excel are represented by real numbers. For example a date that is displayed in Excel as <code>"Feb 28 2013 12:00 PM"</code> is stored as the number <code>41333.5</code>. The integer part of the number stores the number of days since the epoch, which is generally 1900, and the fractional part stores the percentage of the day. A date or time in Excel is just like any other number. To display the number as a date you must apply an Excel number format to it.
     * 
     * ```
     * // Write the number without formatting.
     * worksheet1.writeCell("number", 0, 0, 41333.5);  // 41333.5
     * // Write the date without formatting.
     * worksheet1.writeCell("datetime", 0, 1, new Date(2013, 1, 28, 12)); // 41333.5
     * // Add a format with date formatting.
     * var dtFormat = writer.addFormat("dtFormat");
     * dtFormat.setNumberFormat("mmm d yyyy hh:mm AM/PM");
     * // Write the number with formatting.
     * worksheet1.writeCell("number", 1, 0, 41333.5, dtFormat); // Feb 28 2013 12:00 PM
     * // Write the date with formatting.
     * worksheet1.writeCell("datetime", 1, 1, new Date(2013, 1, 28, 12), dtFormat); // Feb 28 2013 12:00 PM
     * // Widen the columns to make the text clearer.
     * worksheet1.setColumn(0, 1, 20);
     * ```
     * 
     * Dates in Excel do not support timezones and the maximum resolution of times is milliseconds. Dates can be formatted using any of the date formats supported by Excel. See XLSXFormat.setNumberFormat(String numFormat) for more details.  </li>
     * <li><code><b>richString</b></code><br>
     * This type is used to write strings with multiple formats. A value of this type is a JSON-String containing an array of objects with the property pair <code>format</code> and <code>string</code>. Each object represents a fragment of the rich multi-format string with an XLSXFormat (specified with the format name or <code>null</code>) to define the format for the string part. If the string fragment is unformatted then null can be used for the format.<br><b>Note</b>: An empty string fragment is not allowed in a rich string. </li>
     * </ul>
     * @param type The type (see below) of the value to write to the cell.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value The value to write to the cell can be specified as follows:
     *        <ul>
     *        <li>String for the value types <code>string</code>, <code>formula</code>, <code>link</code> and <code>richString</code>. </li>
     *        <li>Number for the value type <code>number</code>. </li>
     *        <li>Boolean for the value type <code>boolean</code>. </li>
     *        <li>Date object for the value type <code>datetime</code>. </li>
     *        </ul>
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWorksheet.writeString]{@link XLSXWorksheet#writeString} [XLSXWorksheet.writeNumber]{@link XLSXWorksheet#writeNumber} [XLSXWorksheet.writeBoolean]{@link XLSXWorksheet#writeBoolean} [XLSXWorksheet.writeFormula]{@link XLSXWorksheet#writeFormula} [XLSXWorksheet.writeLink]{@link XLSXWorksheet#writeLink} [XLSXWorksheet.writeDatetime]{@link XLSXWorksheet#writeDatetime} [XLSXWorksheet.writeRichString]{@link XLSXWorksheet#writeRichString}
     */
    writeCell(type: string, row: number, col: number, value: any, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "datetime"</code>.
     * See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value The datetime to write to the cell.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeDatetime(row: number, col: number, value: Date, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "formula"</code>.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value Formula string to write to cell. See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeFormula(row: number, col: number, value: string, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "link"</code>.
     * See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value The URL/hyperlink to write to the cell.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeLink(row: number, col: number, value: string, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "number"</code>.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value The number to write to the cell. See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeNumber(row: number, col: number, value: number, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "richString"</code>.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value A JSON-String containing an array of objects with the property pair <code>format</code> and <code>string</code>. See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeRichString(row: number, col: number, value: string, format?: XLSXFormat): boolean;
    /**
     * This function is an alternative to using XLSXWorksheet.writeCell(String type, number row, number col, var value, XLSXFormat format) with <code>type = "string"</code>.
     * @param row The zero indexed row number.
     * @param col The zero indexed column number.
     * @param value String to write to cell. See the value type <b>undefined</b> in the documentation of <code>XLSXWorksheet.writeCell()</code> for more details.
     * @param format Optional XLSXFormat object used to apply formatting to the cell. The default value is null to indicate no formatting.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    writeString(row: number, col: number, value: string, format?: XLSXFormat): boolean;
}

/**
 * The XLSXWriter class allows creating files in the Excel 2007+ XLSX file format by use of the library Libxlsxwriter.<br><br>
 * An XLSXWriter object represents an entire Excel document. It can be used to write text, numbers, formulas and hyperlinks to multiple worksheets. It supports features such as:
 * <ul>
 * <li>100% compatible Excel XLSX files </li>
 * <li>Excel formatting </li>
 * <li>Merged cells </li>
 * <li>Autofilters </li>
 * <li>Charts </li>
 * <li>Worksheet PNG/JPEG images </li>
 * </ul><br><b>Note:</b> However, the XLSXWriter can only create new files. It <b> CANNOT READ OR MODIFY </b> existing files.
 */
declare class XLSXWriter {
    /**
     * <br><b>Note:</b> When specifying a filename it is recommended that you use an .xlsx extension or Excel will generate a warning when opening the file.
     * <br><b>Since:</b>DOCUMENTS 5.0e
     * @param filename The name of the new Excel file to create.
     */
    constructor(filename: string);

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_BLACK: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_BLUE: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_BROWN: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_CYAN: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_GRAY: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_GREEN: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_LIME: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_MAGENTA: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_NAVY: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_ORANGE: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_PINK: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_PURPLE: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_RED: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_SILVER: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_WHITE: number;

    /**
     * <br> This constant is member of constant group: Predefined values for common colors<br>
     * The colors are specified using a HTML style RGB integer value. For convenience a limited number of common colors are predefined as follows.
     */
    COLOR_YELLOW: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_NONE: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_THIN: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_MEDIUM: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_DASHED: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_DOTTED: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_THICK: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_DOUBLE: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_HAIR: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_MEDIUM_DASHED: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_DASH_DOT: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_MEDIUM_DASH_DOT: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_DASH_DOT_DOT: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_MEDIUM_DASH_DOT_DOT: number;

    /**
     * <br> This constant is member of constant group: Cell border styles<br>
     * The constants build an enumeration of the available values for cell border styles.
     */
    BORDER_SLANT_DASH_DOT: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_NONE: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_LEFT: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_CENTER: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_RIGHT: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_FILL: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_JUSTIFY: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_CENTER_ACROSS: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_DISTRIBUTED: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_VERTICAL_TOP: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_VERTICAL_BOTTOM: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_VERTICAL_CENTER: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_VERTICAL_JUSTIFY: number;

    /**
     * <br> This constant is member of constant group: Text alignments<br>
     * These constants build an enumeration of the available values for the horizontal and vertical text alignment within a cell.
     */
    ALIGN_VERTICAL_DISTRIBUTED: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_NONE: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_SOLID: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_MEDIUM_GRAY: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_GRAY: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_GRAY: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_HORIZONTAL: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_VERTICAL: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_DOWN: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_UP: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_GRID: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_DARK_TRELLIS: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_HORIZONTAL: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_VERTICAL: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_DOWN: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_UP: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_GRID: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_LIGHT_TRELLIS: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_GRAY_125: number;

    /**
     * <br> This constant is member of constant group: Background Patterns<br>
     * These constants build an enumeration of the available fill patterns for the background of a cell.
     */
    PATTERN_GRAY_0625: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_AREA: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_AREA_STACKED: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_AREA_STACKED_PERCENT: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_BAR: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_BAR_STACKED: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_BAR_STACKED_PERCENT: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_COLUMN: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_COLUMN_STACKED: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_COLUMN_STACKED_PERCENT: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_DOUGHNUT: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_LINE: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_PIE: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_SCATTER: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_SCATTER_STRAIGHT: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_SCATTER_STRAIGHT_WITH_MARKERS: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_SCATTER_SMOOTH: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_SCATTER_SMOOTH_WITH_MARKERS: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_RADAR: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_RADAR_WITH_MARKERS: number;

    /**
     * <br> This constant is member of constant group: Chart types<br>
     * These constants build an enumeration of the available chart types.
     */
    CHART_RADAR_FILLED: number;

    version: string;

    /**
     * This function is used to specify which chartsheet is initially visible in a multi-sheet Excel document. <br><b>Note:</b> More than one chartsheet can be selected via the XLSXWriter.selectChartsheet(var chartsheet) function, however only one chartsheet can be active.
     * @param chartsheet The chartsheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the chartsheet name. </li>
     *        <li>XLSXChartsheet object representing the chartsheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.activateWorksheet]{@link XLSXWriter#activateWorksheet}
     */
    activateChartsheet(chartsheet: any): boolean;

    /**
     * This function is used to specify which worksheet is initially visible in a multi-sheet Excel document. <br><b>Note:</b> More than one worksheet can be selected via the XLSXWriter.selectWorksheet(var worksheet) function, however only one worksheet can be active. The default active worksheet is the first worksheet.
     * @param worksheet The worksheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the worksheet name. </li>
     *        <li>XLSXWorksheet object representing the worksheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.activateChartsheet]{@link XLSXWriter#activateChartsheet}
     */
    activateWorksheet(worksheet: any): boolean;

    /**
     * 
     * @param type The type (from 'Chart types') of chart to be created.
     * @returns An XLSXChart object if successful, <code>null</code> in case of any error.
     */
    addChart(type: number): XLSXChart;

    /**
     * <br><b>Note:</b> At least one worksheet should be added to a new Excel file when creating a chartsheet in order to provide data for the chart.
     * @param name Optional chartsheet name. If it is empty the default Excel convention will be followed, i.e. Chart1, Chart2, etc. The chartsheet name must be a valid Excel chartsheet name, i.e. it must be less than 32 character and it cannot contain any of the characters: <code>/ \ [ ] : * ?</code><br>
     *        In addition, you cannot use the same, case insensitive, <code>sheetname</code> for more than one worksheet, or chartsheet.
     * @returns An XLSXChartsheet object if successful, <code>null</code> in case of any error.
     */
    addChartsheet(name?: string): XLSXChartsheet;

    /**
     * 
     * @param name Unique format name.
     * @returns An XLSXFormat object if successful, <code>null</code> in case of any error.
     */
    addFormat(name: string): XLSXWorksheet;

    /**
     * <br><b>Note:</b> At least one worksheet should be added to a new Excel file.
     * @param name Optional worksheet name. If it is empty the default Excel convention will be followed, i.e. Sheet1, Sheet2, etc. The worksheet name must be a valid Excel worksheet name, i.e. it must be less than 32 character and it cannot contain any of the characters: <code>/ \ [ ] : * ?</code><br>
     *        In addition, you cannot use the same, case insensitive, <code>sheetname</code> for more than one worksheet, or chartsheet.
     * @returns An XLSXWorksheet object if successful, <code>null</code> in case of any error.
     */
    addWorksheet(name?: string): XLSXWorksheet;

    /**
     * 
     * @param name Chartsheet name.
     * @returns An XLSXChartsheet object if successful, <code>null</code> in case of any error.
     */
    getChartsheetByName(name: string): XLSXChartsheet;

    /**
     * 
     * @returns The file path as String.
     */
    getFilePath(): string;

    /**
     * 
     * @returns Text of the last error as String
     */
    getLastError(): string;

    /**
     * 
     * @param name Worksheet name.
     * @returns An XLSXWorksheet object if successful, <code>null</code> in case of any error.
     */
    getWorksheetByName(name: string): XLSXWorksheet;

    /**
     * <br><b>Note:</b> A hidden chartsheet can not be activated or selected so this function is mutually exclusive with the XLSXWriter.activateChartsheet(var chartsheet) and XLSXWriter.selectChartsheet(var chartsheet) functions.
     * @param chartsheet The chartsheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the chartsheet name. </li>
     *        <li>XLSXChartsheet object representing the chartsheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.hideWorksheet]{@link XLSXWriter#hideWorksheet}
     */
    hideChartsheet(chartsheet: any): boolean;

    /**
     * <br><b>Note:</b> A hidden worksheet can not be activated or selected so this function is mutually exclusive with the XLSXWriter.activateWorksheet(var worksheet) and XLSXWriter.selectWorksheet(var worksheet) functions. In addition, since the first worksheet will default to being the active worksheet, you cannot hide the first worksheet without activating another sheet.
     * @param worksheet The worksheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the worksheet name. </li>
     *        <li>XLSXWorksheet object representing the worksheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.hideChartsheet]{@link XLSXWriter#hideChartsheet}
     */
    hideWorksheet(worksheet: any): boolean;

    /**
     * <br><b>Note:</b> After calling this function only both functions XLSXWriter.getFilePath() and XLSXWriter.getLastError() are available for the XLSXWriter object.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    save(): boolean;

    /**
     * This function is used to indicate that a chartsheet is selected in a multi-sheet Excel document.
     * 
     * <br><b>Note:</b> A selected chartsheet has its tab highlighted. Selecting chartsheets is a way of grouping them together so that, for example, several chartsheets could be printed in one go. A chartsheet that has been activated via the XLSXWriter.activateChartsheet(var chartsheet) function will also appear as selected.
     * @param chartsheet The chartsheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the chartsheet name. </li>
     *        <li>XLSXChartsheet object representing the chartsheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.selectWorksheet]{@link XLSXWriter#selectWorksheet}
     */
    selectChartsheet(chartsheet: any): boolean;

    /**
     * This function is used to indicate that a worksheet is selected in a multi-sheet Excel document.
     * 
     * <br><b>Note:</b> A selected worksheet has its tab highlighted. Selecting worksheets is a way of grouping them together so that, for example, several worksheets could be printed in one go. A worksheet that has been activated via the XLSXWriter.activateWorksheet(var worksheet) function will also appear as selected.
     * @param worksheet The worksheet to be updated can be specified as follows:
     *        <ul>
     *        <li>String containing the worksheet name. </li>
     *        <li>XLSXWorksheet object representing the worksheet. </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     * @see [XLSXWriter.selectChartsheet]{@link XLSXWriter#selectChartsheet}
     */
    selectWorksheet(worksheet: any): boolean;

    /**
     * This function can be used to set the document properties of the current Excel document. These properties are visible in Excel (e.g. under <code>File -> Information -> Properties</code> in Excel 2013) and are also available to external applications that read or index windows files.
     * @param title Title of the Excel document.
     * @param subject Optional subject of the Excel document.
     * @param author Optional author of the Excel document.
     * @param manager Optional manager field of the Excel document.
     * @param company Optional company field of the Excel document.
     * @param category Optional category of the Excel document.
     * @param keywords Optional keywords of the Excel document.
     * @param comments Optional comment of the Excel document.
     * @param status Optional status of the Excel document.
     * @param hyperlinkBase Optional hyperlink base url of the Excel document.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    setProperties(title: string, subject: string, author: string, manager: string, company: string, category: string, keywords: string, comments: string, status: string, hyperlinkBase: string): boolean;

}

/**
 * The XMLExport class allows to export DOCUMENTS elements as an XML file by scripting means.<br><br>
 * The exported XML structure may then, for example, be used for further manipulation by an external ERP environment. The following elements can be exported:
 * <ul>
 * <li>DocFile</li>
 * <li>PortalScript </li>
 * <li>Filetype </li>
 * <li>Folder</li>
 * <li>Workflow </li>
 * <li>Distribution List </li>
 * <li>Editor (Fellow) </li>
 * <li>AccessProfile</li>
 * <li>Alias </li>
 * <li>Filing Plan </li>
 * <li>Outbar </li>
 * <li>DocumentsSettings </li>
 * <li>CustomProperties </li>
 * </ul>
 * The XML files may also be reimported into another (or the same) Portal environment by the Docimport application for DocFile objects and by the XML-import of DOCUMENTS Manager for the remaining elements, respectively.
 * <br><b>Since:</b>DOCUMENTS 4.0c available for PortalScript, Filetype, Folder, Workflow, Distribution List, Editor, AccessProfile, Alias and Filing Plan
 * <br><b>Since:</b>DOCUMENTS 4.0d available for Outbar
 * <br><b>Since:</b>DOCUMENTS 4.0e available for DocumentsSettings
 * <br><b>Since:</b>DOCUMENTS 5.0d available for CustomProperties
 */
declare class XMLExport {
    /**
     * The constructor is neccessary to initialize the XMLExport object with some basic settings. The pathFileName parameter is mandatory, the path must be an existing directory structure, and the target file should not yet exist in that directory structure.
     * <br><b>Since:</b>ELC 3.51b / otrisPORTAL 5.1b
     * <br><b>Since:</b>DOCUMENTS 4.0c (new parameter exportDocFile)
     * @param pathFileName String containing full path and file name of the desired target output XML file
     * @param exportDocFile Optional boolean value:
     *        <ul>
     *        <li><code>true</code> indicating that the created XMLExport instance is only able to export DocFile objects; </li>
     *        <li><code>false</code> indicating the created XMLExport instance is able to export the following elements:
     *        <ul>
     *        <li>PortalScript </li>
     *        <li>Filetype </li>
     *        <li>Folder</li>
     *        <li>Workflow </li>
     *        <li>Distribution List </li>
     *        <li>Editor (Fellow) </li>
     *        <li>AccessProfile</li>
     *        <li>Alias </li>
     *        <li>Filing Plan </li>
     *        <li>Outbar </li>
     *        <li>DocumentsSettings </li>
     *        <li>CustomProperties </li>
     *        </ul>
     *        </li>
     *        </ul>
     *        The default value is <code>true</code>.
     */
    constructor(pathFileName: string, exportDocFile?: boolean);

    /**
     * 
     * @param accessProfile The desired access profile to be added to the XML output and specified as follows:
     *        <ul>
     *        <li>String containing the technical name of the access profile </li>
     *        <li>AccessProfile object </li>
     *        </ul>
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addAccessProfile(accessProfile: any): boolean;

    /**
     * 
     * @param aliasName String value containing the technical name of the alias to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addAlias(aliasName: string): boolean;

    /**
     * 
     * @param propName The technical name of the desired global custom property to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addCustomProperty(propName: string): boolean;

    /**
     * 
     * @param distributionListName String containing the name of the distribution list to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addDistributionList(distributionListName: string): boolean;

    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addDocumentsSettings(): boolean;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 4.0c HF2 (new parameter includePrivateFolders)
     * @param editor The editor to be added to the XML output and specified as follows:
     *        <ul>
     *        <li>String containing the login name of the editor. </li>
     *        <li>SystemUser object representing the editor. </li>
     *        </ul>
     * @param includePrivateFolders boolean value indicating whether to export the private folders of the fellow
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFellow(editor: any, includePrivateFolders?: boolean): boolean;

    /**
     * 
     * @param docFile An object of the DocFile class which should be added to the XML output
     * @param exportCondition Optional export conditions specified as follows:
     *        <ul>
     *        <li>boolean value indicating whether the file id should be exported as update key. </li>
     *        <li>XMLExportDescription object defining serveral conditions for the exporting process of the DocFile object. </li>
     *        </ul>
     *        The default value is true.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFile(docFile: DocFile, exportCondition?: any): boolean;

    /**
     * The XML output is able to update the same file type (Update-XML).
     * @param fileTypeName The technical name of the file type to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFileType(fileTypeName: string): boolean;

    /**
     * The XML output is able to update the same file types (Update-XML).
     * @param categoryName The category name of the file types to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFileTypesFromCategory(categoryName: string): boolean;

    /**
     * The XML output is able to update the same file types (Update-XML).
     * @param folderName The folder name of the file types to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFileTypesFromFolder(folderName: string): boolean;

    /**
     * The XML output is able to update the same filing plan (Update-XML).
     * @param filingPlanName String containing the technical name of the filing plan to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFilingPlan(filingPlanName: string): boolean;

    /**
     * This function is able to add the folder structure or the files in the folder to the XMLExport.
     * <br><b>Since:</b>DOCUMENTS 5.0e HF2 (optional parameter updateXML)
     * @param folder The Folder object to be added to the XML output.
     * @param exportStructure Boolean value indicating whether to export the folder structure or the files in the folder, on which the current user has read rights. If you want to export the files in the folder, an XMLExport instance being able to export DocFile should be used.
     * @param exportCondition The export conditions can be specified as follows:
     *        <ul>
     *        <li>boolean value
     *        <ul>
     *        <li>indicating whether the file id should be exported as update key in case of exporting files in the folder; </li>
     *        <li>indicating whether the subfolders should be exported in case of exporting the folder structure. </li>
     *        </ul>
     *        </li>
     *        <li>XMLExportDescription object defining several conditions for the exporting process of the files in the folder. </li>
     *        </ul>
     * @param updateXML Optional boolean value indicating whether the XML output is able to update the same folder (Update-XML) in case of exporting the folder structure. The default value is false. <br><b>Note:</b> This Parameter is ignored in case of exporting the files in the folder.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addFolder(folder: Folder, exportStructure: boolean, exportCondition: any, updateXML?: boolean): boolean;

    /**
     * 
     * @param name String value containing the technical name of the number range to be added to the XML output.
     * @param withCounter boolean value indicating whether to export the actual counter value of the number range
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addNumberRange(name: string, withCounter?: boolean): boolean;

    /**
     * 
     * @param outbarName String value containing the technical name of the outbar to be added to the XML output.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addOutbar(outbarName: string): boolean;

    /**
     * 
     * @param userAccount The user account to be added to the XML output and specified as follows:
     *        <ul>
     *        <li>String containing the login name of the user account. </li>
     *        <li>SystemUser object representing the user account. </li>
     *        </ul>
     * @param includePrivateFolders boolean value indicating whether to export the private folders of the user account
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addPartnerAccount(userAccount: any, includePrivateFolders?: boolean): boolean;

    /**
     * <br><b>Note:</b> The XML files exported in DOCUMENTS 5.0 format are incompatible with DOCUMENTS 4.0.
     * <br><b>Since:</b>DOCUMENTS 5.0 HF1 (default format is 5.0)
     * @param namePattern The name pattern of the PortalScripts to be added to the XML output.
     * @param format Optional String value defining the desired export format. The following formats are available:
     *        <ul>
     *        <li>4.0 (DOCUMENTS 4.0) </li>
     *        <li>5.0 (DOCUMENTS 5.0) </li>
     *        </ul>
     *        The default value is "5.0".
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addPortalScript(namePattern: string, format?: string): boolean;

    /**
     * This method does not export the content of a PortalScript (see XMLExport.addPortalScript()), but executes a PortalScript at the end of the XML-Import of the whole xml file.
     * @param nameScript The name of the PortalScript, that should be executed.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addPortalScriptCall(nameScript: string): boolean;

    /**
     * <br><b>Note:</b> The XML files exported in DOCUMENTS 5.0 format are incompatible with DOCUMENTS 4.0.
     * <br><b>Since:</b>DOCUMENTS 5.0 HF1 (default format is 5.0)
     * @param nameCategory The category name of the PortalScripts to be added to the XML output.
     * @param format Optional String value defining the desired export format. The following formats are available:
     *        <ul>
     *        <li>4.0 (DOCUMENTS 4.0) </li>
     *        <li>4.0 (DOCUMENTS 5.0) </li>
     *        </ul>
     *        The default value is "5.0".
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addPortalScriptsFromCategory(nameCategory: string, format?: string): boolean;

    /**
     * 
     * @param systemUser The SystemUser to be added to the XML output and specified as follows:
     *        <ul>
     *        <li>String containing the login name of the SystemUser. </li>
     *        <li>SystemUser object representing the user account. </li>
     *        </ul>
     * @param includePrivateFolders boolean value indicating whether to export the private folders of the SystemUser
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addSystemUser(systemUser: any, includePrivateFolders?: boolean): boolean;

    /**
     * 
     * @param workflowName String containing the technical name and optional the version number of the workflow to be added to the XML output. The format of the workflowName is <code>technicalName</code>[-version]. If you don't specify the version of the workflow, the workflow with the highest workflow version number will be used. If you want to add a specific version, you have to use technicalName-version e.g. "Invoice-2" as workflowName.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    addWorkflow(workflowName: string): boolean;

    /**
     * After the execution of this method the XMLExport object is in the same state as right after its construction.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    clearXML(): boolean;

    /**
     * 
     * @returns Text of the last error as String
     * @see [DocFile.getLastError]{@link DocFile#getLastError}
     */
    getLastError(): string;

    /**
     * The XML structure is returned as a String, so it is possible to further manipulate it (e.g. with the E4X scripting extension (not discussed in this documentation) before outputting it to its final destination.
     * @returns String containing the complete XMl structure of the XMLExport
     */
    getXML(): string;

    /**
     * Not earlier than when executing this instruction the XML file is created in the target file path.
     * @returns <code>true</code> if successful, <code>false</code> in case of any error
     */
    saveXML(): boolean;

}

/**
 * The XMLExportDescription class has been added to the DOCUMENTS PortalScripting API to improve the XML Export process of DOCUMENTS files by scripting means.<br><br>
 * For instance this allows to use different target archives for each file as well as to influence the archiving process by the file's contents itself. The XMLExportDescription object can only be used as parameter for the method XMLExport.addFile(XMLExportDescription)
 */
declare class XMLExportDescription {
    /**
     * Like in other programming languages you create a new object with the <code>new</code> operator (refer to example below).
     * <br><b>Since:</b>DOCUMENTS 4.0c
     * @see [XMLExport.addFile]{@link XMLExport#addFile}
     */
    constructor();

    exportCreatedAt: boolean;

    exportFileId: boolean;

    exportLastModifiedAt: boolean;

    exportLastModifiedBy: boolean;

    exportOwner: boolean;

}

/**
 * The XMLHTTPRequest class represents a HTTP request.<br><br>
 * Though the name of this class traditionally refers to XML, it can be used to transfer arbitrary strings or binary data. The interface is based on the definition of the class <code>IXMLHTTPRequest</code> from MSXML. As http-library the libcurl is used. To send a HTTP request the following steps are needed:
 * <ul>
 * <li>Creating an instance of this class. </li>
 * <li>Initializing the request via open(). Possibly also adding header data by means of addRequestHeader(). </li>
 * <li>Sending the request via send(). </li>
 * <li>In case of asynchronous request checking for completion of the request operation via XMLHTTPRequest.readyState. </li>
 * <li>Evaluating the result via e.g. XMLHTTPRequest.status, XMLHTTPRequest.response and getAllResponseHeaders().</li>
 * </ul>
 * See <a href="tutorial-06-soap-dom.html">SOAP Client using DOM</a> for a detailed example using XMLHTTPRequest.
 * 
 * <br><b>Note:</b> The XMLHTTPRequest is able to use a proxy configuration. The server searches the proxy settings in the following order (priority)
 * <ul>
 * <li>Specification in the constructor function s. XMLHTTPRequest(String proxy, int proxyPort, String proxyUser, String proxyPasswd)</li>
 * <li>Global specification in the documents.ini </li>
 * <li>On Windows systems: Internet Explorer proxy configuration for the current user </li>
 * <li>On Windows systems: Default WinHTTP proxy configuration from the registry.</li>
 * </ul>
 * 
 * <br><b>Note:</b> If you want to be sure, that no proxy must be used, then use the constructor function XMLHTTPRequest(bool useProxySetting) with useProxySetting = false
 */
declare class XMLHTTPRequest {
    /**
     * <br><b>Note:</b> On windows OS: If no proxy is specified as first parameter, the proxy settings of the Internet Explorer and and the WinHTTP configuration will be checked, and a defined proxy setting will be used.
     * <br><b>Since:</b>DOCUMENTS 4.0
     * <br><b>Since:</b>DOCUMENTS 5.0c (on windows OS support of system proxy configuration)
     * @param proxy Optional string value specifying the hostname of the proxy server being resolvable by the nameserver. On windows OS: If this parameter is not specified, the windows proxy configuration will be used. E.g. the proxy server specified in Internet Explorer is used in the <em>registry</em>.
     * @param proxyPort Optional number of the port on which the <em>proxy</em> accepts requests.
     * @param proxyUser Optional string value specifying the desired login name for the proxy
     * @param proxyPasswd Optional string value specifying the password for logging in to the proxy
     * @see [XMLHTTPRequest.canProxy]{@link XMLHTTPRequest#canProxy}
     */
    constructor(proxy?: string, proxyPort?: number, proxyUser?: string, proxyPasswd?: string);

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0d HF2
     * @param useProxySetting Boolean value. Set to <code>false</code> to switch off the query for proxy settings.
     */
    constructor(useProxySetting?: boolean);

    readonly canAsync: boolean;

    readonly canProxy: boolean;

    /**
     * In this state the request is completed. All the data are available now.
     */
    readonly COMPLETED: number;

    /**
     * When uploading files, the send() function usually detects the file size and forwards it to lower APIs. This is helpful in most cases, because old simple HTTP servers do not support the transfer mode "chunked". Web services may reject uploads without an announced content-length, too.
     * 
     * However, the auto-detection will fail, if a given file is not rewindable (a named pipe, for instance). To avoid errors this property should be set before sending such a special file. After the transmission the property should be either set to "-1" or deleted.
     * 
     * The value is interpreted in the following way.
     * <ul>
     * <li>Values > 0 specify a precise file size in bytes.</li>
     * <li>The value -1 has the same effect as leaving the property undefined (enable auto-detection).</li>
     * <li>The value -2 disables file size detection and enforces a chunked transfer.</li>
     * </ul>
     * 
     * <br><b>Note:</b> This property serves as a hidden optional parameter to the send() function. On new objects it is undefined. Assigning an incorrect value >= 0 may trigger deadlocks or timeouts.
     * @see [send]{@link send}
     */
    FileSizeHint: number;

    /**
     * In this state the request is partially completed. This means that some data has been received.
     */
    readonly INTERACTIVE: number;

    /**
     * In this state the object has been initialized, but not sent yet.
     */
    readonly NOTSENT: number;

    /**
     * The following states are available:
     * <ul>
     * <li>XMLHTTPRequest.UNINITIALIZED = 0 : the method open() has not been called. </li>
     * <li>XMLHTTPRequest.NOTSENT = 1: the object has been initialized, but not sent yet. </li>
     * <li>XMLHTTPRequest.SENT = 2 : the object has been sent. No data is available yet. </li>
     * <li>XMLHTTPRequest.INTERACTIVE = 3: the request is partially completed. This means that some data has been received. </li>
     * <li>XMLHTTPRequest.COMPLETED = 4: the request is completed. All the data are available now.</li>
     * </ul>
     */
    readonly readyState: number;

    /**
     * <br><b>Note:</b> Starting with DOCUMENTS 5.0c its data type is influenced by the optional property responseType. The default type is String. For requests with an attached responseFile this value can be truncated after a few kBytes.
     * @see [responseType,responseFile]{@link responseType,responseFile}
     */
    readonly response: any;

    /**
     * To achieve an efficient download scripts can create a writable <code>File</code> an attach it to the request. The complete response will then be written into this file. The value of the <code>response</code> property, however, will be truncated after the first few kBytes.
     * 
     * <br><b>Note:</b> On new objects this property is undefined.
     * 
     * When send() is called, the request takes exclusive ownership of the attached file. The property will then be reset to null. Even in asynchronous mode send() seems to close the file immediately. In fact, send() detaches the native file handle from the JavaScript object to ensure exclusive access.
     * 
     * Received content will be written to the file, disregarding the HTTP status.
     * @see [response,responseType,File]{@link response,responseType,File}
     */
    responseFile: File;

    /**
     * By default, the object expects text responses and stores them in a String. If the application expects binary data, it may request an ArrayBuffer by setting this property to "arraybuffer". <br><b>Note:</b> On new objects this property is undefined. ArrayBuffer responses are created only once after each request. If a script changes the received buffer, the response property will reflect these changes until a new request starts.
     * @see [response,responseFile]{@link response,responseFile}
     */
    responseType: string;

    /**
     * In this state the object has been sent. No data is available yet.
     */
    readonly SENT: number;

    /**
     * 
     * @see [XMLHTTPRequest.statusText]{@link XMLHTTPRequest#statusText}
     */
    readonly status: number;

    /**
     * 
     * @see [XMLHTTPRequest.status]{@link XMLHTTPRequest#status}
     */
    readonly statusText: string;

    /**
     * In this state the method open() has not been called.
     */
    readonly UNINITIALIZED: number;

    /**
     * This option activate the verification of the host.
     * @see [XMLHTTPRequest.setCAInfo]{@link XMLHTTPRequest#setCAInfo}
     */
    readonly VERIFYHOST: number;

    /**
     * This option activate the verification of the certificate chain.
     * @see [XMLHTTPRequest.setCAInfo]{@link XMLHTTPRequest#setCAInfo}
     */
    readonly VERIFYPEER: number;

    /**
     * 
     * @returns <code>true</code> if successful, <code>false</code> in case of any error.
     */
    abort(): boolean;

    /**
     * <br><b>Note:</b> The request must be initialized via open() before.
     * @param name String specifying the header name.
     * @param value String specifying the header value.
     * @returns <code>true</code> if the header was added successfully, <code>false</code> in case of any error.
     */
    addRequestHeader(name: string, value: string): boolean;

    /**
     * Each entry is in a separate line and has the form 'name:value'.
     * @returns All response headers as a string.
     */
    getAllResponseHeaders(): string;

    /**
     * 
     * @param name String specifying the response header name.
     * @returns String with the value of the response header, an empty string in case of any error.
     */
    getResponseHeader(name: string): string;

    /**
     * 
     * <br><b>Since:</b>DOCUMENTS 5.0e (support PATCH request)
     * @param method String specifying the used HTTP method. The following methods are available:
     *        <ul>
     *        <li>GET: Sending a GET request, for example, for querying a HTML file. </li>
     *        <li>PUT: Sending data to the HTTP server. The data must be passed in the send() call. The URI represents the name under which the data should be stored. Under this name, the data are then normally retrievable. </li>
     *        <li>POST: Sending data to the HTTP server. The data must be passed in the send() call. The URI represents the name of the consumer of the data. </li>
     *        <li>DELETE: Sending a DELETE request. </li>
     *        <li>PATCH: Sending a PATCH request, see RFC 5789 (https://tools.ietf.org/html/rfc5789). </li>
     *        </ul>
     * @param url String containing the URL for this request.
     * @param async Optional flag indicating whether to handle the request asynchronously. In this case the operation send() returns immediately, in other word, it will not be waiting until a response is received. Asynchronous sending is only possible, when XMLHTTPRequest.canAsync returns <code>true</code>. If asynchronous sending is not possible, this flag will be ignored. For an asynchronous request you can use XMLHTTPRequest.readyState to get the current state of the request.
     * @param user Optional user name must be specified only if the HTTP server requires authentication.
     * @param passwd Optional password must also be specified only if the HTTP server requires authentication.
     * @returns <code>true</code> if the request was successfully initialized, <code>false</code> in case of any error.
     * @see [XMLHTTPRequest.send,XMLHTTPRequest.canAsync]{@link XMLHTTPRequest#send,XMLHTTPRequest#canAsync}
     */
    open(method: string, url: string, async?: boolean, user?: string, passwd?: string): boolean;

    /**
     * The request must be prepared via <code>open()</code> before.
     * 
     * <br><b>Note:</b> The request must be initialized via open() before. You can use XMLHTTPRequest.readyState to get the current state of an asynchronous request. The properties XMLHTTPRequest.status and XMLHTTPRequest.statusText return the status of the completed request while using getResponseHeader() and XMLHTTPRequest.response the actual result of the request can be retrieved. An asynchronous request can be canceled using abort().
     * 
     * <br><b>Note:</b> The type of the content parameter can be one of the following: String, ArrayBuffer, File. Caution: all other types will be converted to a string! Given a conventional array, the function will only send a string like "[object Array]".
     * 
     * 
     * 
     * <em> About files </em>
     * 
     * Passed files must be opened in binary read mode. If the file is not rewindable (a named pipe, for instance), the property FileSizeHint should be set before sending. The property is useful to supress an automatic length scan. The function implicitly closes the File object, though the file may remain open for asynchronous operation. When an asynchronous request is completed, its associated files become closed outside the JavaScript environment.
     * 
     * 
     * 
     * <em> About Arraybuffers </em>
     * 
     * Passing a TypedArray (UInt8Array, Int16Array etc.) instead of an ArrayBuffer is possible, but not recommended. The actual implementation always sends the complete associated buffer. The result can be unexpected, if the TypedArray covers only a section of a bigger buffer. This behaviour might change in future releases.
     * <br><b>Since:</b>DOCUMENTS 5.0c (Support for sending File and ArrayBuffer)
     * @param content Optional content to be sent; usually a String. See the remarks section about using other types.
     * @returns <code>true</code> if the request was successfully performed or initiated (for asynchronous requests), <code>false</code> in case of any error.
     * @see [XMLHTTPRequest.open,FileSizeHint]{@link XMLHTTPRequest#open,FileSizeHint}
     */
    send(content?: string): boolean;

    /**
     * 
     * @param pemFile String with the path to pem-file with the servers certificates (bundle of X.509 certificates in PEM format).
     * @param options Integer with a bitmask of verification-options (XMLHTTPRequest.VERIFYPEER, XMLHTTPRequest.VERIFYHOST)
     * @returns
     */
    setCAInfo(pemFile: string, options: number): void;

    /**
     * <br><b>Note:</b> Since 5.0g is redirection the default behaviour of the XMLHTTPRequest;
     * @param count Integer with the amount of allowed redirects. -1 = unlimited, 0 = no redirects
     * @returns
     */
    setRedirect(count: number): void;

}


interface FileTypeMapper {
    "DocFile": DocFile;
}

declare namespace context {
    var file: FileTypeMapper[keyof FileTypeMapper];
    function createFile<K extends keyof FileTypeMapper>(fileType: K): FileTypeMapper[K];
}
